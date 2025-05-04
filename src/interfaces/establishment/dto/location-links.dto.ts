import { IsOptional, IsString } from 'class-validator';
import { ValidLink } from '../../request-validator/valid-link.validator';

export class LocationLinksDto {
  @IsOptional()
  @IsString()
  @ValidLink({ mustContain: 'waze' }, { message: 'Waze link inválido' })
  public waze?: string | undefined;

  @IsOptional()
  @IsString()
  @ValidLink({}, {})
  public googleMaps?: string | undefined;

  @IsOptional()
  @IsString()
  @ValidLink({}, {})
  public appleMaps?: string | undefined;

  @IsOptional()
  @IsString()
  @ValidLink({}, {})
  public uber?: string | undefined;
}
