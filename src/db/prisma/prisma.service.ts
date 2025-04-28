import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleDestroy(): any {
    this.$disconnect();
  }

  onModuleInit(): any {
    this.$connect();
  }
}
