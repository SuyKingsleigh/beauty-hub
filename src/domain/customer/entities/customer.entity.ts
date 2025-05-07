export class Customer {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public cpf: string,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
  ) {}
}
