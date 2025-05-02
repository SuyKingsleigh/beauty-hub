import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { UserController } from '../../interfaces/user/user.controller';
import { Module } from '@nestjs/common';
import { UserPrismaRepository } from './repository/user.prisma.repository';
import { CreateUserUseCase } from '../../application/user/create-user.use-case';
import { FindUserUseCase } from '../../application/user/find-user.use-case';
import { UniqueEmailValidator } from '../../interfaces/request-validator/unique-email.validator';
import { HashGenerator } from '../authentication/entities/hash-generator';
import { AuthModule } from '../authentication/auth.module';

export const USER_REPOSITORY = 'UserRepository';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [
    PrismaService,
    UniqueEmailValidator,

    {
      provide: USER_REPOSITORY,
      useClass: UserPrismaRepository,
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repo) => new CreateUserUseCase(repo, new HashGenerator()),
      inject: [USER_REPOSITORY],
    },
    {
      provide: FindUserUseCase,
      useFactory: (repo) => new FindUserUseCase(repo),
      inject: [USER_REPOSITORY],
    },
  ],
  // Essa dependencia é usada no AuthModule
  exports: [USER_REPOSITORY, FindUserUseCase, CreateUserUseCase],
})
export class UserModule {}
