import { Inject, Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { Events } from '../event-trigger/events.enum';
import { AppointmentOutputDto } from '../../interfaces/appointment/dto/appointment.output.dto';
import { DomainEventBus } from '../../domain/events/domain-event.bus';
import { DOMAIN_EVENT_BUS } from '../../domain/events/consts';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(
    private readonly repository: AppointmentRepository,
    @Inject(DOMAIN_EVENT_BUS) private readonly trigger: DomainEventBus,
  ) {}

  async create(appointment: Appointment): Promise<Appointment> {
    const created = await this.repository.create(appointment);
    this.triggerAppointmentCreated(created);
    return created;
  }

  triggerAppointmentCreated(appointmentCreated: Appointment) {
    this.trigger.publish(
      Events.appointment_scheduled,
      new AppointmentOutputDto(appointmentCreated),
    );
  }
}
