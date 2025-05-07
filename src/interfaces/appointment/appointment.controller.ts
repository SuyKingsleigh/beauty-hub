import { Body, Controller, Post } from '@nestjs/common';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly creator: CreateAppointmentUseCase) {}

  @Post()
  async create(@Body() dto: CreateAppointmentInputDto) {
    return this.creator.create(dto);
  }
}
