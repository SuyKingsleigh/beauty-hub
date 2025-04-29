import { PrismaService } from 'src/db/prisma/prisma.service';
import { UserController } from '../../interfaces/user.controller';
import { Module } from '@nestjs/common';
import { UserPrismaRepository } from '../repositories/user.prisma.repository';
import { CreateUserUseCase } from '../../application/create-user.use-case';
import { FindUserUseCase } from '../../application/find-user.use-case';
import { UniqueEmailValidator } from '../../interfaces/request-validator/unique-email.validator';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repo) => new CreateUserUseCase(repo),
      inject: ['UserRepository'],
    },
    {
      provide: FindUserUseCase,
      useFactory: (repo) => new FindUserUseCase(repo),
      inject: ['UserRepository'],
    },
    UniqueEmailValidator,
  ],
})
export class UserModule {}
