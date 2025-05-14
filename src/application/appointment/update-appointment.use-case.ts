import { Inject, Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { Status } from '../../../generated/prisma';
import { DomainEventBus } from '../../domain/events/domain-event.bus';
import { DOMAIN_EVENT_BUS } from '../../domain/events/consts';
import { AppointmentOutputDto } from '../../interfaces/appointment/dto/appointment.output.dto';
import { Queues } from '../event-trigger/events.enum';

@Injectable()
export class UpdateAppointmentUseCase {
  constructor(
    private readonly repository: AppointmentRepository,
    @Inject(DOMAIN_EVENT_BUS) private readonly trigger: DomainEventBus,
  ) {}

  async update(id: string, dto: Partial<Appointment>): Promise<Appointment> {
    return await this.repository.updatePartial(id, dto);
  }

  async updateStatus(id: string, status: Status): Promise<Appointment> {
    const updated = await this.repository.updatePartial(id, { status });
    if (status === Status.canceled) {
      await this.onCancel(updated);
    }
    return updated;
  }

  async onCancel(appointment: Appointment): Promise<void> {
    await this.trigger.publish(
      Queues.appointment_cancelled,
      new AppointmentOutputDto(appointment),
    );
  }
}
