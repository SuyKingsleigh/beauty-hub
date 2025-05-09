import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';

@Injectable()
export class UpdateAppointmentUseCase {
  constructor(private readonly repository: AppointmentRepository) {}

  async update(id: string, dto: Partial<Appointment>): Promise<Appointment> {
    return await this.repository.updatePartial(id, dto);
  }
}
