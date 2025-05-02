import { UserRepository } from './user.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

/**
 * No AppModule podemos definir para que toda vez que o UserRepository for chamado,
 * ele vai devolver o UserPrismaRepository
 */
@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        account: true,
      },
    });
  }

  create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        accountId: user.accountId,
        passwordHash: user.passwordHash,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
      },
    });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        account: true,
      },
    });
  }
}
