import { Account } from '../entities/account.entity';
import { AccountRepository } from './account.repository.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';

@Injectable() // sempre por o injectable para as dependencias
export class AccountPrismaRepository implements AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(account: Account): Promise<Account> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}
