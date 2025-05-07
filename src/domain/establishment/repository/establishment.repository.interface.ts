import { Establishment } from '../entities/establishment.entity';
import { Crud } from '../../interfaces/crud.interface';

export interface EstablishmentRepository extends Crud<Establishment> {
  create(establishment: Establishment): Promise<Establishment>;

  updatePartial(
    id: string,
    partial: Partial<Establishment>,
  ): Promise<Establishment>;

  delete(id: string): Promise<Establishment>;

  findById(id: string): Promise<Establishment | null>;

  findAll(accountId: string): Promise<Establishment[]>;

  exists(id: string): Promise<boolean>;
}
