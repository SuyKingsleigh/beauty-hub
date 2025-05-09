import { Module } from '@nestjs/common';
import { AppointmentModule } from '../appointment/appointment.module';
import { SlotAvailabilityService } from '../../application/slot/slot-availability.service';
import { SlotController } from '../../interfaces/slot/slot.controller';

@Module({
  imports: [AppointmentModule],
  providers: [SlotAvailabilityService],
  exports: [SlotAvailabilityService],
  controllers: [SlotController],
})
export class SlotModule {}
