import { Establishment } from '../../establishment/entities/establishment.entity';
import { BelongsToEstablishmentInterface } from '../../interfaces/belongs-to-establishment.interface';

export class Service implements BelongsToEstablishmentInterface {
  constructor(
    public readonly id: string | undefined,
    public name: string,
    public price: number,
    public description: string,
    public durationInMinutes: number,
    public establishmentId: string,
    public extraDetails?: Record<string, any> | undefined,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly establishment?: Establishment,
  ) {}
}
