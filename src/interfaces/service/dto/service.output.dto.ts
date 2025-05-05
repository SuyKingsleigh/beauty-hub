import { Service } from '../../../domain/service/entities/service.entity';

export class ServiceOutputDto {
  id: string;
  name: string;
  price: number;
  description: string;
  establishmentId: string;
  extraDetails?: Record<string, any> | undefined;

  constructor(service: Service) {
    this.id = service.id!;
    this.name = service.name;
    this.price = service.price;
    this.description = service.description;
    this.establishmentId = service.establishmentId;
    this.extraDetails = service.extraDetails;
  }
}
