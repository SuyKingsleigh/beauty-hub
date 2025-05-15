import { Appointment } from '../entities/appointment.entity';
import { AppointmentRepository } from './appointment.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { AppointmentMapper } from '../mapper/appointment.mapper';
import { Injectable } from '@nestjs/common';
import { PaginationInputDto } from '../../../interfaces/pagination/pagination.input.dto';

@Injectable()
export class AppointmentPrismaRepository implements AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  includeAllEntities = {
    establishment: true,
    user: true,
    customer: true,
    services: {
      include: {
        service: true,
      },
    },
  };

  async listByUserAndEstablishmentInRange(
    userId: string,
    establishmentId: string,
    from: Date,
    to: Date,
  ): Promise<Appointment[]> {
    const found = await this.prisma.appointment.findMany({
      where: {
        userId,
        establishmentId,
        date: {
          gte: from,
          lte: to,
        },
      },
      include: this.includeAllEntities,
    });

    return found.map((a) => this.mapper.fromPrisma(a));
  }

  async listByUserInRange(
    userId: string,
    from: Date,
    to: Date,
    pagination: PaginationInputDto,
  ): Promise<Appointment[]> {
    const found = await this.prisma.appointment.findMany({
      where: {
        userId,
        date: {
          gte: from, //greater-than-equals (>=)
          lte: to, // lower-than-equals
        },
      },
      orderBy: {
        date: 'asc',
      },
      skip: pagination.offset,
      take: pagination.limit,
      include: this.includeAllEntities,
    });

    return found.map((a) => this.mapper.fromPrisma(a));
  }

  private mapper: AppointmentMapper = new AppointmentMapper();

  async create(appointment: Appointment): Promise<Appointment> {
    const created = await this.prisma.appointment.create({
      data: this.mapper.toPrisma(appointment),
      include: this.includeAllEntities,
    });

    return this.mapper.fromPrisma(created);
  }

  async findById(id: string): Promise<Appointment | null> {
    const found = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        user: true,
        establishment: true,
        services: {
          include: {
            service: true,
          },
        },
        customer: true,
      },
    });

    if (!found) {
      return null;
    }

    return this.mapper.fromPrisma(found);
  }

  async listByCpf(cpf: string): Promise<Appointment[]> {
    const found = await this.prisma.appointment.findMany({
      where: {
        customer: { cpf },
      },
      include: this.includeAllEntities,
    });

    return found.map((a) => this.mapper.fromPrisma(a));
  }

  private async updateServicesInternal(
    id: string,
    partial: Partial<Appointment> & { services?: { serviceId: string }[] },
  ): Promise<void> {
    // 1. Remove os vínculos antigos
    await this.prisma.appointmentServices.deleteMany({
      where: { appointmentId: id },
    });

    // 2. Cria os novos vínculos
    await this.prisma.appointmentServices.createMany({
      data: partial.services!.map(({ serviceId }) => ({
        appointmentId: id,
        serviceId,
      })),
    });
  }

  async updatePartial(
    id: string,
    partial: Partial<Appointment> & { services?: { serviceId: string }[] },
  ): Promise<Appointment> {
    const mapper = new AppointmentMapper();

    const prismaData: any = mapper.toPrismaPartial(partial);

    // Remove 'services' do prismaData se veio junto — evita o erro!
    delete prismaData.services;

    // Atualiza AppointmentServices separadamente
    if (partial.services) {
      await this.updateServicesInternal(id, partial);
    }

    // Atualiza o Appointment sem mexer em 'services'
    const updated = await this.prisma.appointment.update({
      where: { id },
      data: prismaData,
      include: this.includeAllEntities,
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

    return this.mapper.fromPrismaLazy(deleted);
  }

  async exists(id: string): Promise<boolean> {
    const found = await this.prisma.appointment.findUnique({
      where: { id },
    });

    return found !== null;
  }
}
