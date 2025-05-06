import { Service } from '../entities/service.entity';
import { Service as PService } from '../../../../generated/prisma/client';
import { isJsonObject } from '../../../utils/json.utils';

export interface ServicePrismaCreateDto {
  id: string | undefined;
  name: string;
  price: number;
  description: string;
  establishmentId: string;
  extraDetails?: Record<string, any> | undefined;
}

export interface ServicePrismaUpdateDto {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  establishmentId?: string;
  extraDetails?: Record<string, any> | undefined;
}

export class ServiceMapper {
  static toPrisma(service: Service): ServicePrismaCreateDto {
    return {
      id: service.id,
      name: service.name,
      price: service.price,
      description: service.description,
      establishmentId: service.establishmentId,
      extraDetails: service.extraDetails,
    };
  }

  static toPrismaPartial(service: Partial<Service>): ServicePrismaUpdateDto {
    return {
      id: service.id,
      name: service.name,
      price: service.price,
      description: service.description,
      establishmentId: service.establishmentId,
      extraDetails: service.extraDetails,
    };
  }

  static fromPrisma(service: PService): Service {
    return new Service(
      service.id,
      service.name,
      Number(service.price),
      service.description,
      service.establishmentId,
      isJsonObject(service.extraDetails) ? service.extraDetails : {},
      service.createdAt,
      service.updatedAt,
      service.deletedAt,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      service.establishment,
    );
  }
}
