import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';
import { AppointmentMapper } from '../../domain/appointment/mapper/appointment.mapper';
import { CreateAppointmentOutputDto } from './dto/appointment.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { UpdateAppointmentInputDto } from './dto/update-appointment.input.dto';
import { UpdateAppointmentUseCase } from '../../application/appointment/update-appointment.use-case';

@Controller('appointments')
export class AppointmentController {
  constructor(
    private readonly creator: CreateAppointmentUseCase,
    private readonly updater: UpdateAppointmentUseCase,
  ) {}

  private mapper = new AppointmentMapper();

  @Post()
  @TransformToDto(CreateAppointmentOutputDto)
  async create(@Body() dto: CreateAppointmentInputDto) {
    return this.creator.create(this.mapper.fromCreateAppointmentInputDto(dto));
  }

  @Patch(':id')
  @TransformToDto(CreateAppointmentOutputDto)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentInputDto,
  ) {
    return this.updater.update(
      id,
      this.mapper.fromUpdateAppointmentInputDto(dto),
    );
  }
}
