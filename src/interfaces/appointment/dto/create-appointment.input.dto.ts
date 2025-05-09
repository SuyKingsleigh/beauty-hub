import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../../../../generated/prisma';

export class CreateAppointmentInputDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  establishmentId: string;

  @IsString()
  @IsNotEmpty()
  customerId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsArray()
  servicesId: string[];
}
