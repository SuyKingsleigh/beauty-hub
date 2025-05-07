import { Customer } from '../../../domain/customer/entities/customer.entity';

export class CustomerOutputDto {
  id: string;
  cpf: string;
  name: string;

  constructor(customer: Customer) {
    this.id = customer.id!;
    this.cpf = customer.cpf;
    this.name = customer.name;
  }
}
