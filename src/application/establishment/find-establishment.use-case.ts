import { EstablishmentRepository } from '../../domain/establishment/repository/establishment.repository.interface';
import { Establishment } from '../../domain/establishment/entities/establishment.entity';

export class FindEstablishmentUseCase {
  constructor(private readonly repository: EstablishmentRepository) {}

  async findById(id: string): Promise<Establishment | null> {
    return await this.repository.findById(id);
  }
}
