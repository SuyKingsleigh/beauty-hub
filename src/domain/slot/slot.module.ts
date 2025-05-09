import { Module } from '@nestjs/common';
import { AppointmentModule } from '../appointment/appointment.module';
import { SlotAvailabilityService } from '../../application/slot/slot-availability.service';
import { SlotController } from '../../interfaces/slot/slot.controller';
import { UserWorkingHourModule } from '../user-working-hour/user-working-hour.module';
import { FindUserWorkingHourUseCase } from '../../application/user-working-hour/find-user-working-hour.use-case';

@Module({
  imports: [AppointmentModule, UserWorkingHourModule],
  providers: [SlotAvailabilityService],
  exports: [SlotAvailabilityService],
  controllers: [SlotController],
})
export class SlotModule {}
