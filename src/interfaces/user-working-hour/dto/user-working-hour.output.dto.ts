import { EstablishmentOutputDto } from '../../establishment/dto/establishment-output.dto';
import { UserOutputDto } from '../../user/dto/user.output.dto';
import { Weekday } from '../../../../generated/prisma';
import { UserWorkingHour } from '../../../domain/user-working-hour/entities/user-working-hour.entity';

export class UserWorkingHourOutputDto {
  id: string;
  establishment: EstablishmentOutputDto;
  user: UserOutputDto;
  weekday: Weekday;
  startTime: string;
  endTime: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(userWorkingHour: UserWorkingHour) {
    this.id = userWorkingHour.id!;
    this.establishment = new EstablishmentOutputDto(
      userWorkingHour.establishment!,
    );
    this.user = new UserOutputDto(userWorkingHour.user!);
    this.weekday = userWorkingHour.weekday;
    this.startTime = userWorkingHour.startTime;
    this.endTime = userWorkingHour.endTime;
    this.createdAt = userWorkingHour.createdAt;
    this.updatedAt = userWorkingHour.updatedAt;
    this.deletedAt = userWorkingHour.deletedAt;
  }
}
