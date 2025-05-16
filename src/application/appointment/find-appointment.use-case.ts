import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { Injectable } from '@nestjs/common';
import { PaginationInputDto } from '../../interfaces/pagination/pagination.input.dto';
import { endOfDay, startOfDay } from 'date-fns';

@Injectable()
export class FindAppointmentUseCase {
  constructor(private readonly repository: AppointmentRepository) {}

  async findById(id: string): Promise<Appointment | null> {
    return await this.repository.findById(id);
  }

  async listByCpf(cpf: string): Promise<Appointment[]> {
    return await this.repository.listByCpf(cpf);
  }

  async listSlowAf(): Promise<Appointment[]> {
    return await this.repository.listSlowAf();
  }

  async listByUserAndEstablishmentInRange(
    userId: string,
    establishmentId: string,
    from: Date,
    to: Date,
  ): Promise<Appointment[]> {
    return await this.repository.listByUserAndEstablishmentInRange(
      userId,
      establishmentId,
      from,
      to,
    );
  }

  async listByUserAndEstablishmentOnDay(
    userId: string,
    establishmentId: string,
    day: Date,
  ): Promise<Appointment[]> {
    const from = startOfDay(day);
    const to = endOfDay(day);

    return await this.listByUserAndEstablishmentInRange(
      userId,
      establishmentId,
      from,
      to,
    );
  }

  async listByUserInRange(
    userId: string,
    from: Date,
    to: Date,
    pagination: PaginationInputDto,
  ): Promise<Appointment[]> {
    return await this.repository.listByUserInRange(
      userId,
      from,
      to,
      pagination,
    );
  }
}
