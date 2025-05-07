import { Appointment } from '../entities/appointment.entity';
import { Crud } from '../../interfaces/crud.interface';

export interface AppointmentRepository extends Crud<Appointment> {
  create(appointment: Appointment): Promise<Appointment>;
}
