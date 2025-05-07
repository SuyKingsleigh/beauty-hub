import { ServiceRepository } from '../../domain/service/repository/service.repository.interface';
import { Service } from '../../domain/service/entities/service.entity';

export class UpdateServiceUseCase {
  constructor(private readonly repository: ServiceRepository) {}

  async update(id: string, service: Partial<Service>) {
    return await this.repository.updatePartial(id, service);
  }
}
