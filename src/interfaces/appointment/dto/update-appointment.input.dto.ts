import { IsArray, IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '../../../../generated/prisma';

export class UpdateAppointmentInputDto {
  @IsDateString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  establishmentId?: string;

  @IsString()
  @IsOptional()
  customerId?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsArray()
  @IsOptional()
  servicesId?: string[];
}
