import { Establishment } from '../entities/establishment.entity';

export interface EstablishmentRepository {
  create(establishment: Establishment): Promise<Establishment>;

  updatePartial(
    id: string,
    partial: Partial<Establishment>,
  ): Promise<Establishment>;

  delete(id: string): Promise<Establishment>;

  findById(id: string): Promise<Establishment | null>;

  exists(id: string): Promise<boolean>;
}
