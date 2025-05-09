import { Weekday } from '../../../../generated/prisma';
import { Establishment } from '../../establishment/entities/establishment.entity';
import { User } from '../../user/entities/user.entity';

export class UserWorkingHour {
  constructor(
    public readonly id: string | undefined,
    public establishmentId: string,
    public userId: string,
    public weekday: Weekday,
    public startTime: string,
    public endTime: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
    public establishment?: Establishment,
    public user?: User,
  ) {}
}
