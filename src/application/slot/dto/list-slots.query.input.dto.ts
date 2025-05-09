import { IsDate, IsDateString, IsNumber, IsUUID, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class ListSlotsQueryInputDto {
  @IsUUID()
  establishmentId: string;
  @IsUUID()
  userId: string;

  @Transform(({ value }) => new Date(`${value}T00:00:00.000Z`))
  @IsDate()
  from: Date;

  @Transform(({ value }) => new Date(`${value}T23:59:59.999Z`))
  @IsDate()
  to: Date;

  @Type(() => Number)
  @IsNumber()
  @Min(10)
  duration: number;
}
