// src/modules/establishment/mappers/establishment.mapper.ts

import { Establishment as EstablishmentPrismaModel } from 'generated/prisma/client'; // Prisma type
import { Establishment } from '../entities/establishment.entity';
import { LocationLinks } from '../entities/location-links.entity';

export class EstablishmentMapper {
  static fromPrisma(
    prismaEstablishment: EstablishmentPrismaModel,
  ): Establishment {
    return new Establishment(
      prismaEstablishment.id,
      prismaEstablishment.name,
      prismaEstablishment.number,
      prismaEstablishment.street,
      prismaEstablishment.neighbourhood,
      prismaEstablishment.city,
      prismaEstablishment.state,
      prismaEstablishment.country,
      prismaEstablishment.zipCode,
      prismaEstablishment.accountId,
      prismaEstablishment.locationLinks
        ? new LocationLinks(
            prismaEstablishment.locationLinks as Record<string, any>,
          )
        : undefined,
      prismaEstablishment.createdAt,
      prismaEstablishment.updatedAt,
      prismaEstablishment.deletedAt,
    );
  }
}
