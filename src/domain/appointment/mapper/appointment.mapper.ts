import { Appointment as PrismaAppointment } from '../../../../generated/prisma';
import { Appointment } from '../entities/appointment.entity';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { PrismaMapper } from '../../interfaces/prisma-mapper.interface';

export class AppointmentMapper
  implements
    PrismaMapper<
      PrismaAppointment,
      Appointment,
      CreateAppointmentDto,
      UpdateAppointmentDto
    >
{
  fromPrisma(pa: PrismaAppointment): Appointment {
    return new Appointment(
      pa.id,
      pa.establishmentId,
      pa.customerId,
      pa.userId,
      pa.status,
      pa.date,
      pa.createdAt,
      pa.updatedAt,
      pa.deletedAt,
    );
  }

  toPrisma(a: Appointment): CreateAppointmentDto {
    return {
      id: a.id,
      establishmentId: a.establishmentId,
      customerId: a.customerId,
      userId: a.userId,
      status: a.status,
      date: a.date,
    };
  }

  toPrismaPartial(appointment: Partial<Appointment>): UpdateAppointmentDto {
    return {
      establishmentId: appointment.establishmentId,
      customerId: appointment.customerId,
      userId: appointment.userId,
      status: appointment.status,
      date: appointment.date,
    };
  }
}
