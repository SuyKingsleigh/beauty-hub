export class Account {
  constructor(
    public readonly id: string | null,
    public name: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
  ) {}
}
