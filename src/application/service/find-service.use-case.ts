import { ServiceRepository } from '../../domain/service/repository/service.repository.interface';
import { Finder } from '../../domain/interfaces/finder.interface';
import { Service } from '../../domain/service/entities/service.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindServiceUseCase implements Finder {
  constructor(private readonly repository: ServiceRepository) {}

  async findById(id: string): Promise<Service | null> {
    return await this.repository.findById(id);
  }

  async findAll(accountId: string): Promise<Service[]> {
    return await this.repository.findAll(accountId);
  }

  async exists(id: string): Promise<boolean> {
    return await this.repository.exists(id);
  }
}
