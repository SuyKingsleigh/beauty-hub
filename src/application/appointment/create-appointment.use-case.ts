import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { CreateAppointmentInputDto } from '../../interfaces/appointment/dto/create-appointment.input.dto';
import { AppointmentService } from '../../domain/appointment/entities/appointment-service.entity';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(private readonly repository: AppointmentRepository) {}

  async create(dto: CreateAppointmentInputDto): Promise<Appointment> {
    // Cria a instância de Appointment SEM ID (gerado pelo banco)
    const appointment = new Appointment(
      undefined, // ID omitido para ser gerado pelo banco
      dto.establishmentId,
      dto.customerId,
      dto.userId,
      dto.status,
      new Date(dto.date),
      dto.servicesId.map((serviceId) => new AppointmentService(serviceId)), // Associa os serviços
    );

    // Salva no banco e retorna a entidade completa com ID e timestamps
    return this.repository.create(appointment);
  }
}
