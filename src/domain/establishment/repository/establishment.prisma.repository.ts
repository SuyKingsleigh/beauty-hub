import { EstablishmentRepository } from './establishment.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { Establishment } from '../entities/establishment.entity';
import { EstablishmentMapper } from '../mapper/establishment.mapper';
import { LocationLinksMapper } from '../mapper/location-links.mapper';

@Injectable()
export class EstablishmentPrismaRepository implements EstablishmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

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
}
