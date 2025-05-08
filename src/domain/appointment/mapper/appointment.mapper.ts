import {
  Appointment as PrismaAppointment,
  AppointmentServices,
} from '../../../../generated/prisma';
import { Appointment } from '../entities/appointment.entity';
import { CreateAppointmentDbDto } from '../dto/create-appointment.db.dto';
import { UpdateAppointmentDbDto } from '../dto/update-appointment.db.dto';
import { PrismaMapper } from '../../interfaces/prisma-mapper.interface';

type PrismaAppointmentWithServices = PrismaAppointment & {
  services: AppointmentServices[];
};

type CreateAppointmentWithServices = CreateAppointmentDbDto & {
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
      UpdateAppointmentDbDto
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
      pa.establishment,
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

  toPrismaPartial(appointment: Partial<Appointment>): UpdateAppointmentDbDto {
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
