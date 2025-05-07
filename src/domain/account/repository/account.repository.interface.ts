import { Account } from '../entities/account.entity';
import { Crud } from '../../interfaces/crud.interface';

export interface AccountRepository extends Crud<Account> {
  findById(id: string): Promise<Account>;
}
