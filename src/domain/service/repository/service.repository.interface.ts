import { Service } from '../entities/service.entity';
import { Crud } from '../../interfaces/crud.interface';

export interface ServiceRepository extends Crud<Service> {
  create(service: Service): Promise<Service>;

  findById(id: string): Promise<Service | null>;

  delete(id: string): Promise<Service>;

  exists(id: string): Promise<boolean>;

  findAll(accountId: string): Promise<Service[]>;
}
