import { IsNotEmpty } from 'class-validator';

export class CreateCustomerInputDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  cpf: string;
}
