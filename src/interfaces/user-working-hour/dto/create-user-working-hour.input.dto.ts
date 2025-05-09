import { Weekday } from '../../../../generated/prisma';
import { IsEnum, IsOptional, IsUUID, Matches } from 'class-validator';

export class CreateUserWorkingHourInputDto {
  @IsUUID()
  establishmentId: string;

  @IsOptional()
  @IsUUID()
  userId: string;

  @IsEnum(Weekday)
  weekday: Weekday;

  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: 'startTime must be in HH:mm format (00:00 - 23:59)',
  })
  startTime: string;

  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: 'endTime must be in HH:mm format (00:00 - 23:59)',
  })
  endTime: string;
}
