import { Service } from '../entities/service.entity';

export interface ServiceRepository {
  create(service: Service): Promise<Service>;

  update(id: string, partial: Partial<Service>): Promise<Service>;

  findById(id: string): Promise<Service | null>;

  delete(id: string): Promise<Service>;

  exists(id: string): Promise<boolean>;

  findAll(accountId: string): Promise<Service[]>;
}
