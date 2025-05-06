import { CreateEstablishmentInputDto } from '../dto/create-establishment.input.dto';
import { Establishment } from '../../../domain/establishment/entities/establishment.entity';
import { Account } from '../../../domain/account/entities/account.entity';
import { LocationLinks } from '../../../domain/establishment/entities/location-links.entity';

export class CreateEstablishmentInputMapper {
  static toEstablishment(
    dto: CreateEstablishmentInputDto,
    account: Account,
  ): Establishment {
    return new Establishment(
      undefined,
      dto.name,
      dto.number,
      dto.street,
      dto.neighbourhood,
      dto.city,
      dto.state,
      dto.country,
      dto.zipCode,
      account.id!,
      dto.locationLinks as LocationLinks,
    );
  }
}
