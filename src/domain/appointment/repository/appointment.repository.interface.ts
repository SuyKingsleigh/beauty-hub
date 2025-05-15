import { Appointment } from '../entities/appointment.entity';
import { Crud } from '../../interfaces/crud.interface';
import { PaginationInputDto } from '../../../interfaces/pagination/pagination.input.dto';

export interface AppointmentRepository extends Crud<Appointment> {
  create(appointment: Appointment): Promise<Appointment>;

  listByCpf(cpf: string): Promise<Appointment[]>;

  listByUserAndEstablishmentInRange(
    userId: string,
    establishmentId: string,
    from: Date,
    to: Date,
  ): Promise<Appointment[]>;

  listByUserInRange(
    userId: string,
    from: Date,
    to: Date,
    pagination: PaginationInputDto,
  ): Promise<Appointment[]>;
}
