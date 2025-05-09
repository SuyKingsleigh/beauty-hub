import {
  IsArray,
  IsDateString,
  IsEnum,
  IsString,
} from 'class-validator';
import { Status } from '../../../../generated/prisma';
import { Optional } from '@nestjs/common';

export class UpdateAppointmentInputDto {
  @IsDateString()
  @Optional()
  date?: string;

  @IsString()
  @Optional()
  establishmentId?: string;

  @IsString()
  @Optional()
  customerId?: string;

  @IsString()
  @Optional()
  userId?: string;

  @Optional()
  @IsEnum(Status)
  status?: Status;

  @IsArray()
  @Optional()
  servicesId?: string[];
}
