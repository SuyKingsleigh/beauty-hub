import { Module } from '@nestjs/common';
import { AuthModule } from '../authentication/auth.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { AppointmentPrismaRepository } from './repository/appointment.prisma.repository';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';
import { AppointmentController } from '../../interfaces/appointment/appointment.controller';
import { UpdateAppointmentUseCase } from '../../application/appointment/update-appointment.use-case';
import { FindAppointmentUseCase } from '../../application/appointment/find-appointment.use-case';
import { AppointmentDurationCalculatorService } from '../../application/appointment/appointment-duration-calculator.service';
import { DomainEventBus } from '../events/domain-event.bus';
import { RabbitMqModule } from '../../infrastructure/rabbit-mq/rabbit-mq.module';
import { DOMAIN_EVENT_BUS } from '../events/consts';
import { ServiceModule } from '../service/service.module';
import { ValidAppointmentHourValidator } from '../../interfaces/appointment/valid-appointment-hour.validator';

export const APPOINTMENT_REPOSITORY = 'AppointmentRepository';

@Module({
  imports: [AuthModule, RabbitMqModule, ServiceModule],
  providers: [
    PrismaService,
    AppointmentDurationCalculatorService,
    ValidAppointmentHourValidator,
    {
      provide: APPOINTMENT_REPOSITORY,
      useClass: AppointmentPrismaRepository,
    },
    {
      provide: CreateAppointmentUseCase,
      useFactory: (repository, eventBus: DomainEventBus) =>
        new CreateAppointmentUseCase(repository, eventBus),
      inject: [APPOINTMENT_REPOSITORY, DOMAIN_EVENT_BUS],
    },
    {
      provide: UpdateAppointmentUseCase,
      useFactory: (repository) => new UpdateAppointmentUseCase(repository),
      inject: [APPOINTMENT_REPOSITORY],
    },
    {
      provide: FindAppointmentUseCase,
      useFactory: (repository) => new FindAppointmentUseCase(repository),
      inject: [APPOINTMENT_REPOSITORY, DOMAIN_EVENT_BUS],
    },
  ],

  controllers: [AppointmentController],
  exports: [
    APPOINTMENT_REPOSITORY,
    CreateAppointmentUseCase,
    UpdateAppointmentUseCase,
    FindAppointmentUseCase,
    AppointmentDurationCalculatorService,
    ValidAppointmentHourValidator,
  ],
})
export class AppointmentModule {}
