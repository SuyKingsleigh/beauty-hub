import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { User } from '../domain/entities/user.entity';
import { Module } from '@nestjs/common';

interface CreateUserInput {
  name: string;
  email: string;
  passwordHash: string;
  accountId: string;
}

/**
 * Define o cenário de criação de um usuário
 */

export class CreateUserUseCase {
  // esse UserRepository é injetado via AppModule
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserInput): Promise<User> {
    const now = new Date();
    const user = new User(
      null, // o banco adiciona automaticamente
      input.name,
      input.email,
      input.passwordHash,
      input.accountId,
      now,
      null,
      null,
    );
    return await this.userRepository.create(user);
  }
}
