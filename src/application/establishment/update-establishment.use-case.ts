import { Injectable } from '@nestjs/common';
import { EstablishmentRepository } from '../../domain/establishment/repository/establishment.repository.interface';
import { UpdateEstablishmentInputDto } from '../../interfaces/establishment/dto/update-establishment.input.dto';
import { Establishment } from '../../domain/establishment/entities/establishment.entity';
import { LocationLinks } from '../../domain/establishment/entities/location-links.entity';

@Injectable()
export class UpdateEstablishmentUseCase {
  constructor(private readonly repository: EstablishmentRepository) {}

  async execute(
    id: string,
    dto: UpdateEstablishmentInputDto,
  ): Promise<Establishment> {
    const partial: Partial<Establishment> = {
      ...dto,
      locationLinks: dto.locationLinks
        ? new LocationLinks(dto.locationLinks)
        : undefined,
    };

    return await this.repository.updatePartial(id, partial);
  }
}
