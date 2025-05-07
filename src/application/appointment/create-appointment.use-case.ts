import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(private readonly repository: AppointmentRepository) {}

  create() {}
}
