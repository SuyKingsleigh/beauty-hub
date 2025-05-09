import { Status } from '../../../../generated/prisma';

export interface CreateAppointmentDbDto {
  id: string | undefined;
  establishmentId: string;
  customerId: string;
  userId: string;
  status: Status;
  date: Date;
}
