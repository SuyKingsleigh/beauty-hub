import { IsNotEmpty } from 'class-validator';
import { UniqueCPF } from '../../request-validator/unique-cpf.validator';

export class CreateCustomerInputDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @UniqueCPF({ message: 'CPF já cadastrado' })
  cpf: string;
}
