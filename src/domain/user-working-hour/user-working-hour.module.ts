import { Module } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { CreateUserWorkingHourUseCase } from '../../application/user-working-hour/create-user-working-hour.use-case';
import { UserWorkingHourPrismaRepository } from './repository/user-working-hour.prisma.repository';
import { UserWorkingHourController } from '../../interfaces/user-working-hour/user-working-hour.controller';
import { FindUserWorkingHourUseCase } from '../../application/user-working-hour/find-user-working-hour.use-case';

export const USER_WORKING_HOUR_REPOSITORY = 'UserWorkingHourRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: USER_WORKING_HOUR_REPOSITORY,
      useClass: UserWorkingHourPrismaRepository,
    },
    {
      provide: CreateUserWorkingHourUseCase,
      useFactory: (repository) => new CreateUserWorkingHourUseCase(repository),
      inject: [USER_WORKING_HOUR_REPOSITORY],
    },
    {
      provide: FindUserWorkingHourUseCase,
      useFactory: (repository) => new FindUserWorkingHourUseCase(repository),
      inject: [USER_WORKING_HOUR_REPOSITORY],
    },
  ],
  exports: [CreateUserWorkingHourUseCase, FindUserWorkingHourUseCase],
  controllers: [UserWorkingHourController],
})
export class UserWorkingHourModule {}
