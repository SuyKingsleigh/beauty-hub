import { EstablishmentOutputDto } from './establishment-output.dto';
import { Establishment } from '../../../domain/establishment/entities/establishment.entity';

export class ListOfEstablishmentsOutputDto {
  totalItems: number;
  data: EstablishmentOutputDto[];

  constructor(list: Establishment[]) {
    this.totalItems = list.length;
    this.data = list.map((e) => new EstablishmentOutputDto(e));
  }
}
