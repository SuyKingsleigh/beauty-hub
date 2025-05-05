import { ServiceInputDto } from '../dto/service.input.dto';
import { Service } from '../../../domain/service/entities/service.entity';

export class ServiceMapper {
  static toService(dto: ServiceInputDto) {
    return new Service(
      undefined,
      dto.name,
      dto.getPriceAsFloat(),
      dto.description,
      dto.establishmentId,
      dto.extraDetails,
    );
  }
}
