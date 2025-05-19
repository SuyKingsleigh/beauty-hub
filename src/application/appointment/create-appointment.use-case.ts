import { Inject, Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../../domain/appointment/repository/appointment.repository.interface';
import { Appointment } from '../../domain/appointment/entities/appointment.entity';
import { Queues } from '../event-trigger/events.enum';
import { AppointmentOutputDto } from '../../interfaces/appointment/dto/appointment.output.dto';
import { DomainEventBus } from '../../domain/events/domain-event.bus';
import { DOMAIN_EVENT_BUS } from '../../domain/events/consts';
import { ValidAppointmentHourValidator } from './valid-appointment-hour.validator';
import { AppointmentMapper } from '../../domain/appointment/mapper/appointment.mapper';
import { CreateAppointmentInputDto } from '../../interfaces/appointment/dto/create-appointment.input.dto';

@Injectable()
export class CreateAppointmentUseCase {
  constructor(
    private readonly repository: AppointmentRepository,
    @Inject(DOMAIN_EVENT_BUS) private readonly trigger: DomainEventBus,
    @Inject(ValidAppointmentHourValidator)
    private readonly validator: ValidAppointmentHourValidator,
  ) {}

  mapper = new AppointmentMapper();

  async create(dto: CreateAppointmentInputDto): Promise<Appointment> {
    await this.validateAppointment(dto);
    const appointment = this.mapper.fromCreateAppointmentInputDto(dto);
    const created = await this.repository.create(appointment);
    await this.triggerAppointmentCreated(created);
    return created;
  }

  async validateAppointment(dto: CreateAppointmentInputDto) {
    await this.validator.validDate(dto);
    await this.validator.matchesUserWorkingHour(dto);
  }

  async triggerAppointmentCreated(appointmentCreated: Appointment) {
    await this.trigger.publish(
      Queues.appointment_created,
      new AppointmentOutputDto(appointmentCreated),
    );
  }
}
