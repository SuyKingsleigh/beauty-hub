import { Establishment } from '../../establishment/entities/establishment.entity';

export class Service {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public price: number,
    public description: string,
    public establishmentId: string,
    public extraDetails?: Record<string, any> | undefined,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly establishment?: Establishment,
  ) {}
}
