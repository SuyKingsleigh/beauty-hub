import { PrismaClient, User } from 'generated/prisma';
import { UserRepository } from './user.repository.interface';

/**
 * No AppModule podemos definir para que toda vez que o UserRepository for chamado,
 * ele vai devolver o UserPrismaRepository
 */
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        accountId: user.accountId,
      },
    });
  }

  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
}
