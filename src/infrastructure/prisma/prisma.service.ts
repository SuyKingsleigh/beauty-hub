import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { softDeleteMiddleware } from './soft-delete.prisma.middleware';
import { sentryPrismaMiddleware } from './sentry.prisma.middleware';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleDestroy() {
    await this.$disconnect();
  }

  async onModuleInit() {
    // Ordem dos middlewares importa: o primeiro registrado é o último executado
    this.$use(sentryPrismaMiddleware());
    this.$use(softDeleteMiddleware(this));
    await this.$connect();
  }
}
