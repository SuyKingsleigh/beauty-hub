import { EstablishmentRepository } from './establishment.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { Establishment } from '../entities/establishment.entity';
import { EstablishmentMapper } from '../mapper/establishment.mapper';
import { LocationLinksMapper } from '../mapper/location-links.mapper';

@Injectable()
export class EstablishmentPrismaRepository implements EstablishmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(accountId: string): Promise<Establishment[]> {
    const all = await this.prismaService.establishment.findMany({
      where: {
        accountId,
      },
    });

    return all.map((pEstablishment) =>
      EstablishmentMapper.fromPrisma(pEstablishment),
    );
  }

  async exists(id: string): Promise<boolean> {
    const found = await this.prismaService.establishment.findUnique({
      where: { id },
    });

    return found !== null;
  }

  async updatePartial(
    id: string,
    partial: Partial<Establishment>,
  ): Promise<Establishment> {
    const locationLinks =
      partial.locationLinks !== undefined
        ? LocationLinksMapper.toPrisma(partial.locationLinks)
        : undefined;

    const updated = await this.prismaService.establishment.update({
      where: { id },
      data: {
        name: partial.name,
        number: partial.number,
        street: partial.street,
        neighbourhood: partial.neighbourhood,
        city: partial.city,
        state: partial.state,
        country: partial.country,
        zipCode: partial.zipCode,
        accountId: partial.accountId,
        locationLinks,
      },
    });

    return EstablishmentMapper.fromPrisma(updated);
  }

  async create(establishment: Establishment): Promise<Establishment> {
    const locationLinks = LocationLinksMapper.toPrisma(
      establishment.locationLinks,
    );

    const fromPrisma = await this.prismaService.establishment.create({
      data: {
        id: establishment.id,
        name: establishment.name,
        number: establishment.number,
        street: establishment.street,
        neighbourhood: establishment.neighbourhood,
        city: establishment.city,
        state: establishment.state,
        country: establishment.country,
        zipCode: establishment.zipCode,
        accountId: establishment.accountId,
        locationLinks: locationLinks,
      },
    });

    return EstablishmentMapper.fromPrisma(fromPrisma);
  }

  async delete(id: string): Promise<Establishment> {
    const deleted = await this.prismaService.establishment.update({
      data: {
        deletedAt: new Date(),
      },
      where: {
        id,
      },
    });
    return EstablishmentMapper.fromPrisma(deleted);
  }

  async findById(id: string): Promise<Establishment | null> {
    const found = await this.prismaService.establishment.findFirst({
      where: {
        id,
      },
      include: {
        account: true,
      },
    });

    return found ? EstablishmentMapper.fromPrisma(found) : null;
  }
}
