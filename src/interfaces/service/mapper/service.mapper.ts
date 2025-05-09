import { ServiceInputDto } from '../dto/service.input.dto';
import { Service } from '../../../domain/service/entities/service.entity';
import { UpdateServiceInputDto } from '../dto/update-service.input.dto';

export class ServiceMapper {
  static toService(dto: ServiceInputDto) {
    return new Service(
      undefined,
      dto.name,
      dto.getPriceAsFloat(),
      dto.description,
      Number(dto.durationInMinutes),
      dto.establishmentId,
      dto.extraDetails,
    );
  }

  static toPartialService(dto: UpdateServiceInputDto): Partial<Service> {
    return {
      name: dto.name,
      price: dto.getPriceAsFloat(),
      description: dto.description,
      extraDetails: dto.extraDetails,
    };
  }
}
