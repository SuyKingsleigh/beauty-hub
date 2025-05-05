import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { FindEstablishmentUseCase } from '../../../application/establishment/find-establishment.use-case';

@Injectable()
export class EstablishmentExistsPipe implements PipeTransform {
  constructor(private readonly finder: FindEstablishmentUseCase) {}

  async transform(value: string) {
    const entity = await this.finder.findById(value);
    if (!entity)
      throw new NotFoundException(`Establishment with ID ${value} not found`);
    return entity; // ou apenas `value` se preferir passar o ID
  }
}
