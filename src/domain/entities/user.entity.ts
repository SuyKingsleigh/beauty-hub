export class User {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public email: string,
    public passwordHash: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
  ) {}
}
