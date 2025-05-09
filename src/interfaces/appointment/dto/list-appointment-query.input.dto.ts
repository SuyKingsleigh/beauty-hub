import { IsUUID, IsDateString } from 'class-validator';
import { PaginationInputDto } from '../../pagination/pagination.input.dto';

export class ListAppointmentsQueryInputDto extends PaginationInputDto {
  @IsUUID()
  userId: string;

  @IsDateString()
  from: string;

  @IsDateString()
  to: string;
}
