import { Weekday } from '../../../generated/prisma';
import { Establishment } from '../establishment/entities/establishment.entity';
import { User } from '../user/entities/user.entity';

export class UserWorkingHour {
  constructor(
    readonly id: string | undefined,
    establishmentId: string,
    userId: string,
    weekday: Weekday,
    startTime: string,
    endTime: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
    establishment?: Establishment,
    user?: User,
  ) {}
}
