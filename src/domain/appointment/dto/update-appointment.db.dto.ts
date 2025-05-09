import { Status } from '../../../../generated/prisma';

export interface UpdateAppointmentDbDto {
  establishmentId?: string;
  customerId?: string;
  userId?: string;
  status?: Status;
  date?: Date;
  serviceIds?: string[];
}
