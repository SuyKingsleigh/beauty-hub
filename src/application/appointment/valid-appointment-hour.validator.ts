import { ValidatorConstraint } from 'class-validator';
import { CreateAppointmentInputDto } from '../../interfaces/appointment/dto/create-appointment.input.dto';
import { FindAppointmentUseCase } from './find-appointment.use-case';
import { AppointmentDurationCalculatorService } from './appointment-duration-calculator.service';
import { FindServiceUseCase } from '../service/find-service.use-case';
import { BadRequestException, Injectable } from '@nestjs/common';
import { areIntervalsOverlapping, Interval, isFuture } from 'date-fns';

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
    const askedStartDate = new Date(dto.date);
    // nao permite datas passadas
    if (!this.futureDate(askedStartDate)) {
      throw new BadRequestException('date must be future');
    }

    const services = await this.serviceFinder.findManyById(dto.servicesId);
    // calcula o final do agendamento com base nos serviços pedidos
    const askedEndDate =
      this.calculator.calculateAppointmentEndTimeFromServices(
        services,
        askedStartDate,
      );

    // busca os agendamentos daquele profissional naquele estabelecimento naquele dia
    const appointmentsGivenDay =
      await this.appointmentFinder.listByUserAndEstablishmentOnDay(
        dto.userId,
        dto.establishmentId,
        askedStartDate,
      );

    // caso ele não tenha nada marcado, libera
    if (!appointmentsGivenDay || appointmentsGivenDay.length === 0) return;

    // obtém as durações dos agendamentos
    const durations = appointmentsGivenDay.map((appointment) =>
      this.calculator.calculateAppointmentDuration(appointment),
    );

    const askedInterval: Interval = {
      start: askedStartDate,
      end: askedEndDate,
    };

    for (const duration of durations) {
      if (areIntervalsOverlapping(askedInterval, duration as Interval)) {
        throw new BadRequestException('Horário já ocupado');
      }
    }
  }
}
