import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsArray()
  servicesId: string[];
}
