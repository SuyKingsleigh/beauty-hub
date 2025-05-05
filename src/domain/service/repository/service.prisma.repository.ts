import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { ServiceRepository } from './service.repository.interface';
import { Service } from '../entities/service.entity';
import { ServiceMapper } from '../mapper/service.mapper';

@Injectable()
export class ServicePrismaRepository implements ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(service: Service): Promise<Service> {
    const created = await this.prisma.service.create({
      data: ServiceMapper.toPrisma(service),
    });

    return ServiceMapper.fromPrisma(created);
  }

  async update(id: string, partial: Partial<Service>): Promise<Service> {
    const updated = await this.prisma.service.update({
      where: { id },
      data: ServiceMapper.toPrismaPartial(partial),
    });

    return ServiceMapper.fromPrisma(updated);
  }

  findById(id: string): Promise<Service | null> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<Service | null> {
    throw new Error('Method not implemented.');
  }
}
