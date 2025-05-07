import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { ServiceRepository } from './service.repository.interface';
import { Service } from '../entities/service.entity';
import { ServiceMapper } from '../mapper/service.mapper';

@Injectable()
export class ServicePrismaRepository implements ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(accountId: string): Promise<Service[]> {
    const found = await this.prisma.service.findMany({
      where: {
        establishment: {
          accountId,
        },
      },
      include: {
        establishment: true,
      },
    });

    return found.map((s) => ServiceMapper.fromPrisma(s));
  }

  async exists(id: string): Promise<boolean> {
    const found = await this.prisma.service.findFirst({
      where: { id },
    });

    return found !== null;
  }

  async create(service: Service): Promise<Service> {
    const created = await this.prisma.service.create({
      data: ServiceMapper.toPrisma(service),
    });

    return ServiceMapper.fromPrisma(created);
  }

  async updatePartial(id: string, partial: Partial<Service>): Promise<Service> {
    const updated = await this.prisma.service.update({
      where: { id },
      data: ServiceMapper.toPrismaPartial(partial),
    });

    return ServiceMapper.fromPrisma(updated);
  }

  async findById(id: string): Promise<Service | null> {
    const found = await this.prisma.service.findFirst({
      where: { id },
      include: {
        establishment: {
          include: {
            account: true,
          },
        },
      },
    });

    return found ? ServiceMapper.fromPrisma(found) : null;
  }

  async delete(id: string): Promise<Service> {
    const deleted = await this.prisma.service.update({
      data: {
        deletedAt: new Date(),
      },
      where: { id },
    });

    return ServiceMapper.fromPrisma(deleted);
  }
}
