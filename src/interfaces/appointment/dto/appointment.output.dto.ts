import { EstablishmentOutputDto } from '../../establishment/dto/establishment-output.dto';
import { UserOutputDto } from '../../user/dto/user.output.dto';
import { ServiceOutputDto } from '../../service/dto/service.output.dto';
import { CustomerOutputDto } from '../../customer/dto/customer.output.dto';
import { Appointment } from '../../../domain/appointment/entities/appointment.entity';
import { ServiceMapper } from '../../../domain/service/mapper/service.mapper';

export class CreateAppointmentOutputDto {
  id: string;
  date: Date;
  establishment: EstablishmentOutputDto;
  user: UserOutputDto;
  services: ServiceOutputDto[];
  customer: CustomerOutputDto;

  constructor(appointment: Appointment) {
    this.id = appointment.id!;
    this.date = appointment.date;
    this.establishment = new EstablishmentOutputDto(appointment.establishment!);
    this.user = new UserOutputDto(appointment.user!);
    this.services = appointment.services.map(
      (s) => new ServiceOutputDto(ServiceMapper.fromPrisma(s.service!)),
    );
    this.customer = new CustomerOutputDto(appointment.customer!);
  }
}
