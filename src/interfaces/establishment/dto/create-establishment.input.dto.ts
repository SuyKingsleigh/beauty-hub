import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LocationLinksDto } from './location-links.dto';

export class CreateEstablishmentInputDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  neighbourhood: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  zipCode: string;

  @Type(() => LocationLinksDto)
  @IsOptional()
  @ValidateNested()
  locationLinks?: LocationLinksDto | undefined;
}
