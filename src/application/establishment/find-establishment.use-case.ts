import { EstablishmentRepository } from '../../domain/establishment/repository/establishment.repository.interface';
import { Establishment } from '../../domain/establishment/entities/establishment.entity';
import { Finder } from '../interfaces/finder.interface';

export class FindEstablishmentUseCase implements Finder{
  constructor(private readonly repository: EstablishmentRepository) {}

  async findById(id: string): Promise<Establishment | null> {
    return await this.repository.findById(id);
  }

  exists(id: string): Promise<boolean> {
    return this.repository.exists(id);
  }
}
