import { Crud } from '../../interfaces/crud.interface';
import { UserWorkingHour } from '../entities/user-working-hour.entity';
import { Weekday } from '../../../../generated/prisma';

export interface UserWorkingHourRepository extends Crud<UserWorkingHour> {
  create(workingHour: UserWorkingHour): Promise<UserWorkingHour>;

  findByUserIdAndEstablishmentIdAndWeekday(
    userId: string,
    establishmentId: string,
    weekday: Weekday,
  ): Promise<UserWorkingHour[]>;
}
