import { PrismaClient, User } from 'generated/prisma';
import { UserRepository } from './user.repository.interface';
import { PrismaService } from '../../db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

/**
 * No AppModule podemos definir para que toda vez que o UserRepository for chamado,
 * ele vai devolver o UserPrismaRepository
 */
@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(user: User): Promise<User> {
    const created = this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
      },
    });

    return created;
  }

  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
}
