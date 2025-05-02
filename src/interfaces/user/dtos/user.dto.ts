import { User } from '../../../domain/user/entities/user.entity';

export class UserDto {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;

  constructor(user: User) {
    this.id = user.id!;
    this.name = user.name;
    this.email = user.email;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
  }
}
