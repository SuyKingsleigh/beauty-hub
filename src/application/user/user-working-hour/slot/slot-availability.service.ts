import { Slot } from 'src/domain/user/user-working-hour/slot/entities/slot.entity';
import { AppointmentWithDuration } from '../../../appointment/appointment-duration-calculator.service';
import { addMinutes, isBefore, max } from 'date-fns';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { FindUserWorkingHourUseCase } from '../find-user-working-hour.use-case';
import { Weekday } from 'generated/prisma';
import { DateUtils } from '../../../../utils/date.utils';

/**
 * Com base na escala de um usuário (UserWorkingHours)
 * Essa classe calcula os SLOTs de tempo de atendimento
 * para que o cliente (customer) possa agendar seus servicos
 */
@Injectable()
export class SlotAvailabilityService {
  constructor(
    @Inject(FindUserWorkingHourUseCase)
    private readonly finder: FindUserWorkingHourUseCase,
  ) {}

  private readonly logger = new Logger(SlotAvailabilityService.name);

  async findAvailableSlots(
    start: Date,
    end: Date,
    appointments: AppointmentWithDuration[],
    slotDuration: number,
    userId: string,
    establishmentId: string,
  ): Promise<Slot[]> {
    const slots: Slot[] = [];
    const days = DateUtils.getDatesInRange(start, end);
    this.logger.log(
      `loading available slots from ${start} to ${end} given duration ${slotDuration} for userId ${userId} on establishmentId ${establishmentId}`,
    );

    const sortedAppointments = this.sortAppointments(appointments);

    for (const day of days) {
      const weekday = DateUtils.getWeekdayFromDate(day);

      const workingHours =
        await this.finder.findByUserIdAndEstablishmentIdAndWeekday(
          userId,
          establishmentId,
          weekday,
        );

      // Usuario nao cadastrou escala para aquele dia da semana
      if (!workingHours.length) continue;

      this.logger.log(`found working hours: ${JSON.stringify(workingHours)}`);

      // Filtra appointments para o dia atual
      const appointmentsOfDay = sortedAppointments.filter((appt) =>
        DateUtils.isSameDay(appt.start, day),
      );

      // analisa todas as ecalas daquele usuário naquele dia da semana naquele estabelecimento
      for (const work of workingHours) {
        const workStart = DateUtils.mergeDateWithTime(day, work.startTime); // inicio da escala
        const workEnd = DateUtils.mergeDateWithTime(day, work.endTime); // fim da escala

        let current = new Date(workStart);

        // calcula os slots entre o inicio e o proximo agendamnto
        for (const appt of appointmentsOfDay) {
          const apptStart = appt.start;
          const apptEnd = appt.end ?? this.calculateAppointmentEnd(appt);

          this.logger.log(
            `calculating slots from ${current} to ${apptStart} with duration ${slotDuration}`,
          );

          if (current === apptStart) {
            this.logger.log(`jumping to end of appointment ${apptEnd}`);
            current = apptEnd;
            continue;
          }

          const available = this.generateSlotsBetween(
            current,
            apptStart,
            slotDuration,
          );
          this.logger.log(
            `found ${JSON.stringify(available, undefined, 2)} \nfrom ${current} to ${apptStart} with duration ${slotDuration}`,
          );
          slots.push(...available);

          // verifica se o cursor deve se manter entre o current(inicio da escala atual)
          // ou o fim do agendamento
          this.logger.log(`advacing cursor from ${current} to ${apptEnd}`);
          current = this.advanceCursor(current, apptEnd);
          this.logger.log(`cursor advanced to ${current}`);
        }

        const tail = this.generateSlotsBetween(current, workEnd, slotDuration);
        slots.push(...tail);
      }
    }

    return slots;
  }

  private sortAppointments(
    appointments: AppointmentWithDuration[],
  ): AppointmentWithDuration[] {
    return appointments
      .slice()
      .sort((a, b) => a.start.getTime() - b.start.getTime());
  }

  private calculateAppointmentEnd(appointment: AppointmentWithDuration): Date {
    return addMinutes(appointment.start, appointment.durationInMinutes);
  }

  // retorna a maior data entre as dadas
  private advanceCursor(current: Date, apptEnd: Date): Date {
    return max([current, apptEnd]);
  }

  // gera os slots entre duas datas
  private generateSlotsBetween(from: Date, to: Date, duration: number): Slot[] {
    const slots: Slot[] = [];
    let current = new Date(from);

    while (this.canFitSlot(current, to, duration)) {
      const end = addMinutes(current, duration);
      slots.push(new Slot(current, end));
      current = end;
    }

    return slots;
  }

  private canFitSlot(start: Date, end: Date, duration: number): boolean {
    const slotEnd = addMinutes(start, duration);
    return isBefore(slotEnd, end) || slotEnd.getTime() === end.getTime();
  }
}
