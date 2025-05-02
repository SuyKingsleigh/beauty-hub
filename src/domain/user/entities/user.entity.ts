import { Account } from '../../account/entities/account.entity';

export class User {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public email: string,
    public passwordHash: string,
    public readonly accountId: string,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly account?: Account,
  ) {}
}
