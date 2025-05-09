import { EstablishmentOutputDto } from '../../establishment/dto/establishment-output.dto';
import { UserOutputDto } from '../../user/dto/user.output.dto';
import { ServiceOutputDto } from '../../service/dto/service.output.dto';
import { CustomerOutputDto } from '../../customer/dto/customer.output.dto';
import { Appointment } from '../../../domain/appointment/entities/appointment.entity';
import { ServiceMapper } from '../../../domain/service/mapper/service.mapper';
import { Status } from '../../../../generated/prisma';

export class AppointmentOutputDto {
  id: string;
  date: Date;
  status: Status;
  establishment: EstablishmentOutputDto;
  user: UserOutputDto;
  services: ServiceOutputDto[];
  customer: CustomerOutputDto;

  constructor(appointment: Appointment) {
    this.id = appointment.id!;
    this.date = appointment.date;
    this.status = appointment.status;
    this.establishment = new EstablishmentOutputDto(appointment.establishment!);
    this.user = new UserOutputDto(appointment.user!);
    this.services = appointment.services.map(
      (s) => new ServiceOutputDto(ServiceMapper.fromPrisma(s.service!)),
    );
    this.customer = new CustomerOutputDto(appointment.customer!);
  }
}

export class ListAppointmentOutputDto {
  totalItems: number;
  data: AppointmentOutputDto[];

  constructor(data: Appointment[]) {
    this.totalItems = data.length;
    this.data = data.map(a => new AppointmentOutputDto(a));
  }
}
