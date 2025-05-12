import { ValidatorConstraint } from 'class-validator';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';
import { FindAppointmentUseCase } from '../../application/appointment/find-appointment.use-case';
import { AppointmentDurationCalculatorService } from '../../application/appointment/appointment-duration-calculator.service';
import { FindServiceUseCase } from '../../application/service/find-service.use-case';
import { BadRequestException, Injectable } from '@nestjs/common';
import { isFuture } from 'date-fns';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidAppointmentHourValidator {
  constructor(
    protected readonly appointmentFinder: FindAppointmentUseCase,
    protected readonly serviceFinder: FindServiceUseCase,
    protected readonly calculator: AppointmentDurationCalculatorService,
  ) {}

  private futureDate(date) {
    return isFuture(date);
  }

  async validate(dto: CreateAppointmentInputDto): Promise<void> {
    const from = new Date(dto.date);

    if (!this.futureDate(from)) {
      throw new BadRequestException('date must be future');
    }

    const services = await this.serviceFinder.findManyById(dto.servicesId);

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

    if (found && found.length >= 1) {
      throw new BadRequestException('Hour already in use');
    }
  }
}
