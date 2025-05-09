import { UserWorkingHourRepository } from '../../domain/user-working-hour/repository/user-working-hour.repository.interface';
import { Injectable } from '@nestjs/common';
import { Weekday } from '../../../generated/prisma';
import { UserWorkingHour } from '../../domain/user-working-hour/entities/user-working-hour.entity';

@Injectable()
export class FindUserWorkingHourUseCase {
  constructor(private readonly repository: UserWorkingHourRepository) {}

  async findByUserIdAndEstablishmentIdAndWeekday(
    userId: string,
    establishmentId: string,
    weekday: Weekday,
  ): Promise<UserWorkingHour[]> {
    return await this.repository.findByUserIdAndEstablishmentIdAndWeekday(
      userId,
      establishmentId,
      weekday,
    );
  }
}
