import { IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class ServiceInputDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Matches(/^\d{1,5},\d{2}$/, {
    message: 'O preço deve estar no formato 999,99',
  })
  price: string;

  @IsNotEmpty()
  durationInMinutes: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  establishmentId: string;

  @IsOptional()
  extraDetails?: Record<string, any> | undefined;

  /**
   * Retorna o preço convertido para número float (ex: "10,50" → 10.5)
   */
  getPriceAsFloat(): number {
    return parseFloat(this.price.replace(',', '.'));
  }
}
