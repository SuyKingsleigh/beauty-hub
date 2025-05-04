import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { softDeleteMiddleware } from './soft-delete.prisma.middleware';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleDestroy() {
    await this.$disconnect();
  }

  async onModuleInit() {
    this.$use(softDeleteMiddleware());
    await this.$connect();
  }
}
