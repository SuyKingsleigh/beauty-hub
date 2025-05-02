import { UserRepository } from '../../domain/user/repository/user.repository.interface';
import { HashComparer } from '../../domain/authentication/entities/bcrypt-hash-comparer';
import { JwtTokenGenerator } from '../../domain/authentication/entities/jwt-token-generator';

export interface AuthInput {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasher: HashComparer,
    private readonly jwt: JwtTokenGenerator,
  ) {}

  async execute(input: AuthInput): Promise<{ token: string }> {
    const user = await this.userRepository.findByEmail(input.email);
    if (!user) throw new Error('Invalid credentials');

    const valid = await this.hasher.compare(input.password, user.passwordHash);
    if (!valid) throw new Error('Invalid credentials');

    const token = await this.jwt.generate({
      id: user.id,
    });

    return { token };
  }
}
