import { PrismaMapper } from '../../interfaces/prisma-mapper.interface';
import { Customer as PrismaCustomer } from '../../../../generated/prisma';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDbDto } from '../dto/create-customer.db.dto';
import { UpdateCustomerDbDto } from '../dto/update-customer.db.dto';

export class CustomerMapper
  implements
    PrismaMapper<
      PrismaCustomer,
      Customer,
      CreateCustomerDbDto,
      UpdateCustomerDbDto
    >
{
  fromPrisma(p: PrismaCustomer): Customer {
    return new Customer(
      p.id,
      p.name,
      p.cpf,
      p.createdAt,
      p.updatedAt,
      p.deletedAt,
    );
  }

  toPrisma(e: Customer): CreateCustomerDbDto {
    return {
      id: e.id,
      name: e.name,
      cpf: e.cpf,
    };
  }

  toPrismaPartial(e: Partial<Customer>): UpdateCustomerDbDto {
    return {
      name: e.name,
      cpf: e.cpf,
    };
  }
}
