import { Account } from '../entities/account.entity';

export interface AccountRepository {
  create(account: Account): Promise<Account>;

  findById(id: string): Promise<Account>;
}
