import { PrismaService } from 'src/db/prisma/prisma.service';
import { UserController } from '../../interfaces/user/user.controller';
import { Module } from '@nestjs/common';
import { UserPrismaRepository } from '../repositories/user.prisma.repository';
import { CreateUserUseCase } from '../../application/user/create-user.use-case';
import { FindUserUseCase } from '../../application/user/find-user.use-case';
import { UniqueEmailValidator } from '../../interfaces/request-validator/unique-email.validator';
import { HashGenerator } from '../entities/authentication/hash-generator';
import { AuthModule } from './auth.module';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    {
      provide: CreateUserUseCase,
      useFactory: (repo) => new CreateUserUseCase(repo, new HashGenerator()),
      inject: ['UserRepository'],
    },
    {
      provide: FindUserUseCase,
      useFactory: (repo) => new FindUserUseCase(repo),
      inject: ['UserRepository'],
    },
    UniqueEmailValidator,
  ],
  // Essa dependencia é usada no AuthModule
  exports: ['UserRepository', FindUserUseCase],
})
export class UserModule {}
