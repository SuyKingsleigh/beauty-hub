import { Account } from '../entities/account.entity';
import { AccountRepository } from './account.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';

@Injectable() // sempre por o injectable para as dependencias
export class AccountPrismaRepository implements AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  updatePartial(id: string, partial: Partial<Account>): Promise<Account> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<Account> {
    throw new Error('Method not implemented.');
  }

  async exists(id: string): Promise<boolean> {
    return (await this.findById(id)) !== null;
  }

  create(account: Account): Promise<Account> {
    return this.prisma.account.create({
      data: {
        id: account.id,
        name: account.name,
      },
    });
  }

  findById(id: string): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}
