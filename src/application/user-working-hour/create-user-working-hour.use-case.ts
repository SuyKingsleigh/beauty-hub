import { Injectable } from '@nestjs/common';
import { UserWorkingHourRepository } from '../../domain/user-working-hour/repository/user-working-hour.repository.interface';
import { UserWorkingHour } from '../../domain/user-working-hour/entities/user-working-hour.entity';

@Injectable()
export class CreateUserWorkingHourUseCase {
  constructor(private readonly repository: UserWorkingHourRepository) {}

  async create(userWorkingHour: UserWorkingHour): Promise<UserWorkingHour> {
    return this.repository.create(userWorkingHour);
  }
}
