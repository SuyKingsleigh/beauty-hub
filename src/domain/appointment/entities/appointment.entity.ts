import { Establishment } from '../../establishment/entities/establishment.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { User } from '../../user/entities/user.entity';
import { AppointmentService } from './appointment-service.entity';

export class Appointment {
  constructor(
    public readonly id: string | undefined,
    public establishmentId: string,
    public customerId: string,
    public userId: string,
    public status: string,
    public date: Date,
    public readonly createdAt?: Date | null,
    public readonly updatedAt?: Date | null,
    public readonly deletedAt?: Date | null,
    public readonly establishment?: Establishment,
    public readonly customer?: Customer,
    public readonly user?: User,
    public readonly services?: AppointmentService[],
  ) {}
}
