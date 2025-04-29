import { PrismaService } from 'src/db/prisma/prisma.service';
import { UserController } from '../../interfaces/user.controller';
import { Module } from '@nestjs/common';
import { UserPrismaRepository } from '../repositories/user.prisma.repository';
import { UserCreator } from '../../application/user.creator';
import { UserFinder } from '../../application/UserFinder';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    {
      provide: UserCreator,
      useFactory: (repo) => new UserCreator(repo),
      inject: ['UserRepository'],
    },
    {
      provide: UserFinder,
      useFactory: (repo) => new UserFinder(repo),
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
