import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(private readonly repository: AppointmentRepository) {}

  async create(appointment: Appointment): Promise<Appointment> {
    return this.repository.create(appointment);
  }
}
