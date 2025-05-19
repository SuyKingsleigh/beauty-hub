import { ValidatorConstraint } from 'class-validator';
import { CreateAppointmentInputDto } from '../../interfaces/appointment/dto/create-appointment.input.dto';
import { FindAppointmentUseCase } from './find-appointment.use-case';
import { AppointmentDurationCalculatorService } from './appointment-duration-calculator.service';
import { FindServiceUseCase } from '../service/find-service.use-case';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  areIntervalsOverlapping,
  Interval,
  isBefore,
  isAfter,
  isPast,
} from 'date-fns';
import { FindUserWorkingHourUseCase } from '../user/user-working-hour/find-user-working-hour.use-case';
import { WeekdayMapper } from '../../domain/user/user-working-hour/mapper/weekday.mapper';
import { DateUtils } from '../../utils/date.utils';

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidAppointmentHourValidator {
  constructor(
    protected readonly appointmentFinder: FindAppointmentUseCase,
    protected readonly serviceFinder: FindServiceUseCase,
    protected readonly calculator: AppointmentDurationCalculatorService,
    protected readonly userWorkingHourFinder: FindUserWorkingHourUseCase,
  ) {}

  async matchesUserWorkingHour(dto: CreateAppointmentInputDto) {
    const date = new Date(dto.date);
    const workingHours =
      await this.userWorkingHourFinder.findByUserIdAndEstablishmentIdAndWeekday(
        dto.userId,
        dto.establishmentId,
        WeekdayMapper.fromDate(date),
      );

    if (!workingHours || workingHours.length === 0) {
      throw new BadRequestException(`User does not work on that date`);
    }

    for (const work of workingHours) {
      const workStart = DateUtils.mergeDateWithTime(date, work.startTime); // inicio da escala
      const workEnd = DateUtils.mergeDateWithTime(date, work.endTime); // fim da escala

      if (isBefore(date, workStart)) {
        throw new BadRequestException(
          `Date is before user's working hours ${workStart}`,
        );
      } else if (isAfter(date, workEnd)) {
        throw new BadRequestException(
          `Date is after user's working hours ${workEnd}`,
        );
      }
    }
  }

  async validDate(dto: CreateAppointmentInputDto): Promise<void> {
    const askedStartDate = new Date(dto.date);
    // nao permite datas passadas
    if (isPast(askedStartDate)) {
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
