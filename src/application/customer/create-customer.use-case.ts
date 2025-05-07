import { CustomerRepository } from '../../domain/customer/repository/customer.repository.interface';
import { Injectable } from '@nestjs/common';
import { CreateCustomerInputDto } from '../../interfaces/customer/dto/create-customer.input.dto';

@Injectable()
export class CreateCustomerUseCase {
  constructor(private readonly repository: CustomerRepository) {}

  async create(dto: CreateCustomerInputDto) {
    return this.repository.create(dto);
  }
}
