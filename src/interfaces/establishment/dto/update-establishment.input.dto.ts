// src/modules/establishment/dto/update-establishment.input.dto.ts

import {
  IsOptional,
  IsString,
  IsUUID,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { LocationLinksDto } from './location-links.dto';

/**
 * DTO usado para atualizar parcialmente um estabelecimento.
 * Todos os campos são opcionais, pois a atualização é parcial (PATCH).
 */
export class UpdateEstablishmentInputDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() number?: string;
  @IsOptional() @IsString() street?: string;
  @IsOptional() @IsString() neighbourhood?: string;
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() state?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() zipCode?: string;
  @IsOptional() @IsUUID() accountId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => LocationLinksDto)
  locationLinks?: LocationLinksDto;
}
