import { UserRepository } from 'src/domain/user/repository/user.repository.interface';
import { User } from '../../domain/user/entities/user.entity';
import { HashGenerator } from '../../domain/authentication/entities/hash-generator';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

/**
 * Define o cenário de criação de um usuário
 */

export class CreateUserUseCase {
  // esse UserRepository é injetado via AppModule
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}

  async execute(input: CreateUserInput): Promise<User> {
    const now = new Date();
    const passwordHash = await this.hashGenerator.hash(input.password);

    const user = new User(
      undefined,
      input.name,
      input.email,
      passwordHash,
      now,
    );
    return await this.userRepository.create(user);
  }
}
