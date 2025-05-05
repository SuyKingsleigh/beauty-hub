import { Module } from '@nestjs/common';
import { AuthModule } from '../authentication/auth.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { ServicePrismaRepository } from './repository/service.prisma.repository';
import { ServiceController } from '../../interfaces/service/service.controller';
import { CreateServiceUseCase } from '../../application/service/create-service.use-case';

export const SERVICE_REPOSITORY = 'ServiceRepository';

@Module({
  imports: [AuthModule],
  providers: [
    PrismaService,
    {
      provide: SERVICE_REPOSITORY,
      useClass: ServicePrismaRepository,
    },
    {
      provide: CreateServiceUseCase,
      useFactory: (repository) => new CreateServiceUseCase(repository),
      inject: [SERVICE_REPOSITORY],
    },
  ],
  controllers: [ServiceController],
  exports: [SERVICE_REPOSITORY],
})
export class ServiceModule {}
