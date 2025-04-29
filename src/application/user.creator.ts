import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { User } from '../domain/entities/user.entity';

interface CreateUserInput {
  name: string;
  email: string;
  passwordHash: string;
}

/**
 * Define o cenário de criação de um usuário
 */

export class UserCreator {
  // esse UserRepository é injetado via AppModule
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserInput): Promise<User> {
    const now = new Date();
    const user = new User(
      undefined,
      input.name,
      input.email,
      input.passwordHash,
      now,
    );
    return await this.userRepository.create(user);
  }
}
