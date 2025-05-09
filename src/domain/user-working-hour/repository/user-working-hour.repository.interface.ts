import { Crud } from '../../interfaces/crud.interface';
import { UserWorkingHour } from '../user-working-hour.entity';

export interface UserWorkingHourRepository extends Crud<UserWorkingHour> {
  create(workingHour: UserWorkingHour): Promise<UserWorkingHour>;
}
