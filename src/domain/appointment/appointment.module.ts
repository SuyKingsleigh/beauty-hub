import { Module } from '@nestjs/common';
import { AuthModule } from '../authentication/auth.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { AppointmentPrismaRepository } from './repository/appointment.prisma.repository';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';

export const APPOINTMENT_REPOSITORY = 'AppointmentRepository';

@Module({
  imports: [AuthModule],
  providers: [
    PrismaService,
    {
      provide: APPOINTMENT_REPOSITORY,
      useClass: AppointmentPrismaRepository,
    },
    {
      provide: CreateAppointmentUseCase,
      useFactory: (repository) => new CreateAppointmentUseCase(repository),
      inject: [APPOINTMENT_REPOSITORY],
    },
  ],
  exports: [APPOINTMENT_REPOSITORY],
})
export class AppointmentModule {}
