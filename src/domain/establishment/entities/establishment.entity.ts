import { LocationLinks } from './location-links.entity';
import { Account } from '../../account/entities/account.entity';

export class Establishment {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public number: string,
    public street: string,
    public neighbourhood: string,
    public city: string,
    public state: string,
    public country: string,
    public zipCode: string,
    public accountId: string,
    public locationLinks?: LocationLinks | undefined,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly account?: Account,
  ) {}
}
