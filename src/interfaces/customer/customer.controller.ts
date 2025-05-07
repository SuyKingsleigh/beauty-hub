import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerUseCase } from '../../application/customer/create-customer.use-case';
import { CreateCustomerInputDto } from './dto/create-customer.input.dto';
import { CustomerOutputDto } from './dto/customer.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';

@Controller('customers')
export class CustomerController {
  constructor(private readonly creator: CreateCustomerUseCase) {}

  @Post()
  @TransformToDto(CustomerOutputDto)
  async create(@Body() dto: CreateCustomerInputDto) {
    return await this.creator.create(dto);
  }
}
