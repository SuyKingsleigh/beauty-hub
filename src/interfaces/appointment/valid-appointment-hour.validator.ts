import { ValidatorConstraint } from 'class-validator';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';
import { FindAppointmentUseCase } from '../../application/appointment/find-appointment.use-case';
import { AppointmentDurationCalculatorService } from '../../application/appointment/appointment-duration-calculator.service';
import { FindServiceUseCase } from '../../application/service/find-service.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidAppointmentHourValidator {
  constructor(
    protected readonly appointmentFinder: FindAppointmentUseCase,
    protected readonly serviceFinder: FindServiceUseCase,
    protected readonly calculator: AppointmentDurationCalculatorService,
  ) {}

  async validate(dto: CreateAppointmentInputDto): Promise<boolean> {
    const services = await this.serviceFinder.findManyById(dto.servicesId);
    const from = new Date(dto.date);

    const to = this.calculator.calculateAppointmentEndTimeFromServices(
      services,
      from,
    );

    const found =
      await this.appointmentFinder.listByUserAndEstablishmentInRange(
        dto.userId,
        dto.establishmentId,
        from,
        to,
      );

    return !found || found.length === 0;
  }
}
