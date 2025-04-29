export class User {
  constructor(
    public readonly id: string | null,
    public name: string,
    public email: string,
    public passwordHash: string,
    public accountId: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
  ) {}
}
