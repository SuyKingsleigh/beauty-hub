import { Module } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { CustomerPrismaRepository } from './repository/customer.prisma.repository';
import { CreateCustomerUseCase } from '../../application/customer/create-customer.use-case';
import { CustomerController } from '../../interfaces/customer/customer.controller';
import { FindCustomerUseCase } from '../../application/customer/find-customer.use-case';
import { UniqueCpfValidator } from '../../interfaces/request-validator/unique-cpf.validator';

export const CUSTOMER_REPOSITORY = 'CustomerRepository';

@Module({
  providers: [
    PrismaService,
    UniqueCpfValidator,
    {
      provide: CUSTOMER_REPOSITORY,
      useClass: CustomerPrismaRepository,
    },
    {
      provide: CreateCustomerUseCase,
      useFactory: (repository) => new CreateCustomerUseCase(repository),
      inject: [CUSTOMER_REPOSITORY],
    },
    {
      provide: FindCustomerUseCase,
      useFactory: (repository) => new FindCustomerUseCase(repository),
      inject: [CUSTOMER_REPOSITORY],
    },
  ],
  controllers: [CustomerController],
  exports: [CUSTOMER_REPOSITORY, CreateCustomerUseCase, FindCustomerUseCase],
})
export class CustomerModule {}
