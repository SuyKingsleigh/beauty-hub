import { Module } from '@nestjs/common';
import { AuthModule } from '../authentication/auth.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { AppointmentPrismaRepository } from './repository/appointment.prisma.repository';

export const APPOINTMENT_REPOSITORY = 'AppointmentRepository';

@Module({
  imports: [AuthModule],
  providers: [
    PrismaService,
    {
      provide: APPOINTMENT_REPOSITORY,
      useClass: AppointmentPrismaRepository,
    },
  ],
  exports: [APPOINTMENT_REPOSITORY],
})
export class AppointmentModule {}
