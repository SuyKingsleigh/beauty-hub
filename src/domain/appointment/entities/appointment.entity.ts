import { Establishment } from '../../establishment/entities/establishment.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { User } from '../../user/entities/user.entity';
import { AppointmentService } from './appointment-service.entity';
import { Status } from '../../../../generated/prisma';

export class Appointment {
  constructor(
    public readonly id: string | undefined,
    public establishmentId: string,
    public customerId: string,
    public userId: string,
    public status: Status,
    public date: Date,
    public readonly services: AppointmentService[],
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly establishment?: Establishment,
    public readonly customer?: Customer,
    public readonly user?: User,
  ) {}
}
