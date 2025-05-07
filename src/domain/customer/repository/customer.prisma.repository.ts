import { Customer } from '../entities/customer.entity';
import { CustomerRepository } from './customer.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { CustomerMapper } from '../mapper/customer.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerPrismaRepository implements CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByCpf(cpf: string): Promise<Customer | null> {
    const found = await this.prisma.customer.findUnique({
      where: { cpf },
    });

    if (!found) return null;

    return this.mapper.fromPrisma(found);
  }

  mapper = new CustomerMapper();

  async create(customer: Customer): Promise<Customer> {
    const created = await this.prisma.customer.create({
      data: this.mapper.toPrisma(customer),
    });

    return this.mapper.fromPrisma(created);
  }

  async findById(id: string): Promise<Customer | null> {
    const found = await this.prisma.customer.findUnique({
      where: { id },
    });

    if (!found) return null;

    return this.mapper.fromPrisma(found);
  }

  async updatePartial(
    id: string,
    partial: Partial<Customer>,
  ): Promise<Customer> {
    const updated = await this.prisma.customer.update({
      data: this.mapper.toPrismaPartial(partial),
      where: { id },
    });

    return this.mapper.fromPrisma(updated);
  }

  async delete(id: string): Promise<Customer> {
    const deleted = await this.prisma.customer.update({
      data: {
        deletedAt: new Date(),
      },
      where: { id },
    });

    return this.mapper.fromPrisma(deleted);
  }

  async exists(id: string): Promise<boolean> {
    const found = await this.findById(id);
    return found !== null;
  }
}
