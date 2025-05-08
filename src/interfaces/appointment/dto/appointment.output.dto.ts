import { EstablishmentOutputDto } from '../../establishment/dto/establishment-output.dto';
import { UserDto } from '../../user/dto/user.dto';
import { ServiceOutputDto } from '../../service/dto/service.output.dto';
import { CustomerOutputDto } from '../../customer/dto/customer.output.dto';
import { Appointment } from '../../../domain/appointment/entities/appointment.entity';
import { ServiceMapper } from '../../../domain/service/mapper/service.mapper';

export class CreateAppointmentOutputDto {
  id: string;
  date: Date;
  establishment: EstablishmentOutputDto;
  user: UserDto;
  services: ServiceOutputDto[];
  customer: CustomerOutputDto;

  constructor(appointment: Appointment) {
    this.id = appointment.id!;
    this.date = appointment.date;
    this.establishment = new EstablishmentOutputDto(appointment.establishment!);
    this.user = new UserDto(appointment.user!);
    this.services = appointment.services.map(
      (s) => new ServiceOutputDto(ServiceMapper.fromPrisma(s.service!)),
    );
    this.customer = new CustomerOutputDto(appointment.customer!);
  }
}
