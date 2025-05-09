import { Status } from '../../../../generated/prisma';
import { AppointmentService } from '../entities/appointment-service.entity';

export interface UpdateAppointmentDbDto {
  establishmentId?: string;
  customerId?: string;
  userId?: string;
  status?: Status;
  date?: Date;
  services?: AppointmentService[];
}
