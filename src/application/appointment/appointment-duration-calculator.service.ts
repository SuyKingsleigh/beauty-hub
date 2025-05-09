import { Injectable } from '@nestjs/common';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';

export interface AppointmentWithDuration {
  start: Date;
  durationInMinutes: number;
}

@Injectable()
export class AppointmentDurationCalculatorService {
  private calculateAppointmentDuration(
    appointment: Appointment,
  ): AppointmentWithDuration {
    let duration = 0;
    for (const service of appointment.services) {
      duration += Number(service.service!.durationInMinutes);
    }
    return { start: appointment.date, durationInMinutes: duration };
  }

  calculateListOfAppointmentDuration(
    appointments: Appointment[],
  ): AppointmentWithDuration[] {
    return appointments.map((a) => this.calculateAppointmentDuration(a));
  }
}
