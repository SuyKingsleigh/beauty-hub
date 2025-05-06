import { IsOptional, Matches } from 'class-validator';

export class UpdateServiceInputDto {
  @IsOptional()
  name: string;

  @IsOptional()
  @Matches(/^\d{1,5},\d{2}$/, {
    message: 'O preço deve estar no formato 999,99',
  })
  price: string;

  @IsOptional()
  description: string;

  @IsOptional()
  establishmentId: string;

  @IsOptional()
  extraDetails?: Record<string, any> | undefined;

  /**
   * Retorna o preço convertido para número float (ex: "10,50" → 10.5)
   */
  getPriceAsFloat(): number | undefined {
    if (!this.price) {
      return undefined;
    }
    
    return parseFloat(this.price.replace(',', '.'));
  }
}
