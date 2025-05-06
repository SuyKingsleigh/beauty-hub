import { Service } from '../../../domain/service/entities/service.entity';
import { ServiceOutputDto } from './service.output.dto';

export class ListServiceOutputDto {
  totalItems: number;
  data: ServiceOutputDto[];

  constructor(data: Service[]) {
    this.totalItems = data.length;
    this.data = data.map((s) => new ServiceOutputDto(s));
  }
}
