import { Injectable } from '@nestjs/common';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { addMinutes } from 'date-fns';
import { Service } from '../../domain/service/entities/service.entity';

export interface AppointmentWithDuration {
  start: Date;
  durationInMinutes: number;
}

/**
 * Responsável por simplificar um agendamento do ponto de vista de duração
 * ou seja, a partir de um agendament, obtém sua data de inicio e calcula sua duração
 */
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

  calculateAppointmentEndTimeFromServices(
    services: Service[],
    startTime: Date,
  ) {
    return addMinutes(
      startTime,
      this.calculateServicesDurationInMinutes(services),
    );
  }

  private calculateServicesDurationInMinutes(services: Service[]) {
    let duration = 0;
    for (const service of services) {
      duration += Number(service.durationInMinutes);
    }
    return duration;
  }
}
