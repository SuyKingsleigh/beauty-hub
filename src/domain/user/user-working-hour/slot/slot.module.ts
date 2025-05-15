import { Module } from '@nestjs/common';
import { AppointmentModule } from '../../../appointment/appointment.module';
import { SlotAvailabilityService } from '../../../../application/user/user-working-hour/slot/slot-availability.service';
import { SlotController } from '../../../../interfaces/slot/slot.controller';
import { UserWorkingHourModule } from '../user-working-hour.module';

@Module({
  imports: [AppointmentModule, UserWorkingHourModule],
  providers: [SlotAvailabilityService],
  exports: [SlotAvailabilityService],
  controllers: [SlotController],
})
export class SlotModule {}
