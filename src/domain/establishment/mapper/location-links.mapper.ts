import { LocationLinks } from '../entities/location-links.entity';
import { Prisma } from '../../../../generated/prisma';

export class LocationLinksMapper {
  static toPrisma(locationLinks?: LocationLinks | null) {
    return locationLinks
      ? (JSON.parse(JSON.stringify(locationLinks)) as Prisma.InputJsonObject)
      : undefined;
  }
}
