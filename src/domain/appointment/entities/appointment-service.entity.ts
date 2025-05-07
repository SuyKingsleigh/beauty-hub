import { Appointment } from './appointment.entity';
import { Service } from '../../../../generated/prisma';

export class AppointmentService {
  constructor(
    public serviceId: string,
    public appointmentId: string,
    public readonly appointment?: Appointment,
    public readonly service?: Service,
  ) {}
}
