import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../domain/customer/repository/customer.repository.interface';
import { Customer } from '../../domain/customer/entities/customer.entity';

@Injectable()
export class FindCustomerUseCase {
  constructor(private readonly repository: CustomerRepository) {}

  async findByCpf(cpf: string): Promise<Customer | null> {
    return this.repository.findByCpf(cpf);
  }
}
