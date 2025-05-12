import { EstablishmentRepository } from '../../domain/establishment/repository/establishment.repository.interface';
import { Establishment } from '../../domain/establishment/entities/establishment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteEstablishmentUseCase {
  constructor(private readonly repository: EstablishmentRepository) {}

  async execute(id: string): Promise<Establishment> {
    return await this.repository.delete(id);
  }
}
