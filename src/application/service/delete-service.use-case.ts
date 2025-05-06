import { Injectable } from '@nestjs/common';
import { ServiceRepository } from '../../domain/service/repository/service.repository.interface';
import { Service } from '../../domain/service/entities/service.entity';

@Injectable()
export class DeleteServiceUseCase {
  constructor(private readonly repository: ServiceRepository) {}

  async delete(id: string): Promise<Service> {
    return await this.repository.delete(id);
  }
}
