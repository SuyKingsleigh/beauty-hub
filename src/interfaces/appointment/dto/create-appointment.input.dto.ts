import {
  IsArray,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Status } from '../../../../generated/prisma';
import { Transform, Type } from 'class-transformer';

export class CreateAppointmentInputDto {
  @IsDate()
  @Transform(({ value }) => {
    // Substitui o espaço por 'T' para o formato ISO (ex: "2025-05-19 09:00" → "2025-05-19T09:00")
    const isoString =
      typeof value === 'string' ? value.replace(' ', 'T') : value;
    return new Date(isoString);
  })
  date: Date;

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
