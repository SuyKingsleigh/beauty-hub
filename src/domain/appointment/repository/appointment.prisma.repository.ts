import { Appointment } from '../entities/appointment.entity';
import { AppointmentRepository } from './appointment.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { AppointmentMapper } from '../mapper/appointment.mapper';

export class AppointmentPrismaRepository implements AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(appointment: Appointment): Promise<Appointment> {
    const mapper = new AppointmentMapper();
    const created = await this.prisma.appointment.create({
      data: mapper.toPrisma(appointment),
    });

    return mapper.fromPrisma(created);
  }

  async findById(id: string): Promise<Appointment | null> {
    const found = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        user: true,
        establishment: true,
        services: true,
        customer: true,
      },
    });

    if (!found) {
      return null;
    }

    return new AppointmentMapper().fromPrisma(found);
  }

  async updatePartial(
    id: string,
    partial: Partial<Appointment>,
  ): Promise<Appointment> {
    const mapper = new AppointmentMapper();
    const updated = await this.prisma.appointment.update({
      where: { id },
      data: mapper.toPrismaPartial(partial),
    });

    return mapper.fromPrisma(updated);
  }

  async delete(id: string): Promise<Appointment> {
    const deleted = await this.prisma.appointment.update({
      data: {
        deletedAt: new Date(),
      },
      where: { id },
    });

    return new AppointmentMapper().fromPrisma(deleted);
  }

  async exists(id: string): Promise<boolean> {
    const found = await this.prisma.appointment.findUnique({
      where: { id },
    });

    return found !== null;
  }
}
