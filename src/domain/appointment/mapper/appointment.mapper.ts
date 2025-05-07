import {
  Appointment as PrismaAppointment,
  AppointmentServices,
} from '../../../../generated/prisma';
import { Appointment } from '../entities/appointment.entity';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { PrismaMapper } from '../../interfaces/prisma-mapper.interface';

type PrismaAppointmentWithServices = PrismaAppointment & {
  services: AppointmentServices[];
};

type CreateAppointmentWithServices = CreateAppointmentDto & {
  services: {
    create: {
      serviceId: string;
    }[];
  };
};

export class AppointmentMapper
  implements
    PrismaMapper<
      PrismaAppointmentWithServices,
      Appointment,
      CreateAppointmentWithServices,
      UpdateAppointmentDto
    >
{
  fromPrisma(pa: PrismaAppointmentWithServices): Appointment {
    return new Appointment(
      pa.id,
      pa.establishmentId,
      pa.customerId,
      pa.userId,
      pa.status,
      pa.date,
      pa?.services,
      pa.createdAt,
      pa.updatedAt,
      pa.deletedAt,
    );
  }

  fromPrismaLazy(pa: PrismaAppointment): Appointment {
    return new Appointment(
      pa.id,
      pa.establishmentId,
      pa.customerId,
      pa.userId,
      pa.status,
      pa.date,
      [],
      pa.createdAt,
      pa.updatedAt,
      pa.deletedAt,
    );
  }

  toPrisma(a: Appointment): CreateAppointmentWithServices {
    return {
      id: a.id,
      establishmentId: a.establishmentId,
      customerId: a.customerId,
      userId: a.userId,
      status: a.status,
      date: a.date,
      services: {
        create:
          a.services?.map((s) => ({
            serviceId: s.serviceId,
          })) || [],
      },
    };
  }

  toPrismaPartial(appointment: Partial<Appointment>): UpdateAppointmentDto {
    return {
      serviceIds: appointment?.services?.map((s) => s.serviceId),
      establishmentId: appointment.establishmentId,
      customerId: appointment.customerId,
      userId: appointment.userId,
      status: appointment.status,
      date: appointment.date,
    };
  }
}
