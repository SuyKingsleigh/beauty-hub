import { Body, Controller, Post } from '@nestjs/common';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';
import { AppointmentMapper } from '../../domain/appointment/mapper/appointment.mapper';
import { CreateAppointmentOutputDto } from './dto/appointment.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly creator: CreateAppointmentUseCase) {}

  private mapper = new AppointmentMapper();

  @Post()
  @TransformToDto(CreateAppointmentOutputDto)
  async create(@Body() dto: CreateAppointmentInputDto) {
    return this.creator.create(this.mapper.fromCreateAppointmentInputDto(dto));
  }
}
