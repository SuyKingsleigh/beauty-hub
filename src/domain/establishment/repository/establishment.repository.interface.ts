import { Establishment } from '../entities/establishment.entity';

export interface EstablishmentRepository {
  create(establishment: Establishment): Promise<Establishment>;
}
