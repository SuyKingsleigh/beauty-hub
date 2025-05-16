import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { softDeleteMiddleware } from './soft-delete.prisma.middleware';
import { sentryPrismaSlowQueryMonitorMiddleware } from './sentryPrismaSlowQueryMonitorMiddleware';

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
    this.$use(sentryPrismaSlowQueryMonitorMiddleware());
    this.$use(softDeleteMiddleware(this));
    await this.$connect();
  }
}
