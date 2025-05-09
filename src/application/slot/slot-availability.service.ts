import { Slot } from 'src/domain/slot/entities/slot.entity';
import { AppointmentWithDuration } from '../appointment/appointment-duration-calculator.service';
import { addMinutes, isBefore, max } from 'date-fns';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { FindUserWorkingHourUseCase } from '../user-working-hour/find-user-working-hour.use-case';
import { Weekday } from 'generated/prisma';

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
    const days = this.getDatesInRange(start, end);
    this.logger.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `loading available slots from ${start} to ${end} given duration ${slotDuration} for userId ${userId} on establishmentId ${establishmentId}`,
    );

    const sortedAppointments = this.sortAppointments(appointments);

    for (const day of days) {
      const weekday = this.getWeekdayFromDate(day);

      const workingHours =
        await this.finder.findByUserIdAndEstablishmentIdAndWeekday(
          userId,
          establishmentId,
          weekday,
        );

      if (!workingHours.length) continue;

      // Filtra appointments para o dia atual
      const appointmentsOfDay = sortedAppointments.filter((appt) =>
        this.isSameDay(appt.start, day),
      );

      for (const work of workingHours) {
        const workStart = this.mergeDateWithTime(day, work.startTime); // inicio da escala
        const workEnd = this.mergeDateWithTime(day, work.endTime); // fim da escala

        let current = new Date(workStart);

        for (const appt of appointmentsOfDay) {
          const apptStart = appt.start;
          const apptEnd = this.calculateAppointmentEnd(appt);

          const available = this.generateSlotsBetween(
            current,
            apptStart,
            slotDuration,
          );
          slots.push(...available);

          current = this.advanceCursor(current, apptEnd);
        }

        const tail = this.generateSlotsBetween(current, workEnd, slotDuration);
        slots.push(...tail);
      }
    }

    return slots;
  }

  /**
   * Retorna uma lista de datas (sem horário) entre `from` e `to`, inclusivo.
   */
  private getDatesInRange(from: Date, to: Date): Date[] {
    const dates: Date[] = [];
    const current = new Date(from);
    current.setHours(0, 0, 0, 0);

    const endDate = new Date(to);
    endDate.setHours(0, 0, 0, 0);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  /**
   * Verifica se duas datas estão no mesmo dia.
   */
  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  /**
   * Converte uma string HH:mm para um Date baseado numa data de referência.
   */
  private mergeDateWithTime(baseDate: Date, timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const result = new Date(baseDate);
    result.setHours(hours, minutes, 0, 0);
    return result;
  }

  /**
   * Extrai o weekday (`monday`, `tuesday`, etc.) de uma data.
   */
  private getWeekdayFromDate(date: Date): Weekday {
    const days: Weekday[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];
    return days[date.getDay()];
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

  private advanceCursor(current: Date, apptEnd: Date): Date {
    return max([current, apptEnd]);
  }

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
