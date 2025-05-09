import { FindAppointmentUseCase } from '../../application/appointment/find-appointment.use-case';
import { SlotAvailabilityService } from '../../application/slot/slot-availability.service';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppointmentDurationCalculatorService } from '../../application/appointment/appointment-duration-calculator.service';
import { ListSlotsQueryInputDto } from '../../application/slot/dto/list-slots.query.input.dto';

@Controller('slots')
export class SlotController {
  constructor(
    private readonly appointmentFinder: FindAppointmentUseCase,
    @Inject(SlotAvailabilityService)
    private readonly slotAvailabilityService: SlotAvailabilityService,
    @Inject(AppointmentDurationCalculatorService)
    private readonly durationCalculator: AppointmentDurationCalculatorService,
  ) {}

  @Get()
  async listSlots(@Query() input: ListSlotsQueryInputDto) {
    const foundAppointments =
      await this.appointmentFinder.listByUserAndEstablishmentInRange(
        input.userId,
        input.establishmentId,
        input.from,
        input.to,
      );

    const durations =
      this.durationCalculator.calculateListOfAppointmentDuration(
        foundAppointments,
      );

    return this.slotAvailabilityService.findAvailableSlots(
      input.from,
      input.to,
      durations,
      input.duration,
    );
  }
}
