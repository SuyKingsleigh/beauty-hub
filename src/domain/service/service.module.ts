import { Module } from '@nestjs/common';
import { AuthModule } from '../authentication/auth.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { ServicePrismaRepository } from './repository/service.prisma.repository';
import { ServiceController } from '../../interfaces/service/service.controller';
import { CreateServiceUseCase } from '../../application/service/create-service.use-case';
import { FindServiceUseCase } from '../../application/service/find-service.use-case';
import { UpdateServiceUseCase } from '../../application/service/update-service.use-case';

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
    {
      provide: FindServiceUseCase,
      useFactory: (repository) => new FindServiceUseCase(repository),
      inject: [SERVICE_REPOSITORY],
    },
    {
      provide: UpdateServiceUseCase,
      useFactory: (repository) => new UpdateServiceUseCase(repository),
      inject: [SERVICE_REPOSITORY],
    },
  ],
  controllers: [ServiceController],
  exports: [SERVICE_REPOSITORY],
})
export class ServiceModule {}
