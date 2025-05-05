import { Injectable } from '@nestjs/common';
import { ServiceRepository } from '../../domain/service/repository/service.repository.interface';
import { Service } from '../../domain/service/entities/service.entity';

@Injectable()
export class CreateServiceUseCase {
  constructor(private readonly repository: ServiceRepository) {}

  async create(dto: Service) {
    return await this.repository.create(dto);
  }
}
