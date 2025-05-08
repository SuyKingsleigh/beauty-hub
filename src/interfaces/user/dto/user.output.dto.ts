import { User } from '../../../domain/user/entities/user.entity';

export class UserOutputDto {
  id: string;
  name: string;
  email: string;

  constructor(user: User) {
    this.id = user.id!;
    this.name = user.name;
    this.email = user.email;
  }
}
