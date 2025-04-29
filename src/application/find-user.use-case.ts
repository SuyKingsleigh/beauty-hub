import { Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/user.repository.interface';
import { User } from '../domain/entities/user.entity';

@Injectable()
export class FindUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}
