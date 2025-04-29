import { PrismaService } from 'src/db/prisma/prisma.service';
import { UserController } from '../../interfaces/user.controller';
import { Module } from '@nestjs/common';
import { UserPrismaRepository } from '../repositories/user.prisma.repository';
import { CreateUserUseCase } from '../../application/create-user.usecase';

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
  ],
})
export class UserModule {}
