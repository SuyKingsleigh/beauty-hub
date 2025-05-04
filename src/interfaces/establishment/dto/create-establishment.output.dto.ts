import { LocationLinks } from '../../../domain/establishment/entities/location-links.entity';
import { Establishment } from '../../../domain/establishment/entities/establishment.entity';

export class CreateEstablishmentOutputDto {
  id: string;
  name: string;
  number: string;
  street: string;
  neighbourhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  accountId: string;
  locationLinks?: LocationLinks | undefined;

  constructor(from: Establishment) {
    this.id = from.id!;
    this.name = from.name;
    this.number = from.number;
    this.street = from.street;
    this.neighbourhood = from.neighbourhood;
    this.city = from.city;
    this.state = from.state;
    this.country = from.country;
    this.zipCode = from.zipCode;
    this.accountId = from.accountId;
    this.locationLinks = from.locationLinks;
  }
}
