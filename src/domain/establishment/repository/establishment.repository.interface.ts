import { Establishment } from '../entities/establishment.entity';

export interface EstablishmentRepository {
  create(establishment: Establishment): Promise<Establishment>;

  updatePartial(
    id: string,
    partial: Partial<Establishment>,
  ): Promise<Establishment>;
}
