import { Slot } from 'src/domain/slot/entities/slot.entity';
import { AppointmentWithDuration } from '../appointment/appointment-duration-calculator.service';
import { addMinutes, isBefore, max } from 'date-fns';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SlotAvailabilityService {
  /**
   * Calcula todos os slots disponíveis entre o horário inicial e final,
   * desconsiderando os horários ocupados por appointments.
   */
  findAvailableSlots(
    start: Date,
    end: Date,
    appointments: AppointmentWithDuration[],
    requiredSlotMinutes: number,
  ): Slot[] {
    const sortedAppointments = this.sortAppointments(appointments);
    const slots: Slot[] = [];

    let current = new Date(start); // data do inicio da busca

    for (const appointment of sortedAppointments) {
      const apptStart = appointment.start;
      const apptEnd = this.calculateAppointmentEnd(appointment);

      // calcula os slots entre o start e o inicio do slot, o tamanho do slot e variável
      const availableSlots = this.generateSlotsBetween(
        current,
        apptStart,
        requiredSlotMinutes,
      );

      slots.push(...availableSlots);
      current = this.advanceCursor(current, apptEnd);
    }

    const finalSlots = this.generateSlotsBetween(
      current,
      end,
      requiredSlotMinutes,
    );

    slots.push(...finalSlots);

    return slots;
  }

  /**
   * Ordena a lista de appointments em ordem crescente pelo horário de início.
   */
  private sortAppointments(
    appointments: AppointmentWithDuration[],
  ): AppointmentWithDuration[] {
    return appointments
      .slice()
      .sort((a, b) => a.start.getTime() - b.start.getTime());
  }

  /**
   * Calcula a data/hora de fim de um appointment com base na duração.
   *
   * @param appointment - Appointment com início e duração
   * @returns Data/hora final do appointment
   */
  private calculateAppointmentEnd(appointment: AppointmentWithDuration): Date {
    return addMinutes(appointment.start, appointment.durationInMinutes);
  }

  /**
   * Avança o cursor atual no tempo para evitar sobreposição com o appointment.
   */
  private advanceCursor(current: Date, apptEnd: Date): Date {
    return max([current, apptEnd]);
  }

  /**
   * Gera slots disponíveis entre dois horários, com a duração especificada.
   */
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

  /**
   * Verifica se um slot com a duração mínima cabe entre duas datas.
   */
  private canFitSlot(start: Date, end: Date, duration: number): boolean {
    const slotEnd = addMinutes(start, duration);
    return isBefore(slotEnd, end) || slotEnd.getTime() === end.getTime();
  }
}
