import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCustomerUseCase } from '../../application/customer/create-customer.use-case';
import { CreateCustomerInputDto } from './dto/create-customer.input.dto';
import { CustomerOutputDto } from './dto/customer.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { FindCustomerUseCase } from '../../application/customer/find-customer.use-case';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly creator: CreateCustomerUseCase,
    private readonly finder: FindCustomerUseCase,
  ) {}

  @Post()
  @TransformToDto(CustomerOutputDto)
  async create(@Body() dto: CreateCustomerInputDto) {
    return await this.creator.create(dto);
  }

  @Get('find/:cpf')
  @TransformToDto(CustomerOutputDto)
  async findByCpf(@Param('cpf') cpf: string) {
    const found = await this.finder.findByCpf(cpf);
    if (!found) {
      throw new NotFoundException(`No customer found with CPF ${cpf}`);
    }
    return found;
  }
}
