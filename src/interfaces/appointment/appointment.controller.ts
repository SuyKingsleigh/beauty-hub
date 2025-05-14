import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAppointmentUseCase } from '../../application/appointment/create-appointment.use-case';
import { CreateAppointmentInputDto } from './dto/create-appointment.input.dto';
import { AppointmentMapper } from '../../domain/appointment/mapper/appointment.mapper';
import {
  AppointmentOutputDto,
  ListAppointmentOutputDto,
} from './dto/appointment.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { UpdateAppointmentInputDto } from './dto/update-appointment.input.dto';
import { UpdateAppointmentUseCase } from '../../application/appointment/update-appointment.use-case';
import { FindAppointmentUseCase } from '../../application/appointment/find-appointment.use-case';
import { ListAppointmentsQueryInputDto } from './dto/list-appointment-query.input.dto';
import { ValidAppointmentHourValidator } from '../../application/appointment/valid-appointment-hour.validator';
import { Status } from '../../../generated/prisma';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { CacheQueryInterceptor } from '../interceptor/cache-query.interceptor';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
export class AppointmentController {
  constructor(
    private readonly creator: CreateAppointmentUseCase,
    private readonly updater: UpdateAppointmentUseCase,
    private readonly finder: FindAppointmentUseCase,
    private readonly validator: ValidAppointmentHourValidator,
  ) {}

  private mapper = new AppointmentMapper();

  @Post()
  @TransformToDto(AppointmentOutputDto)
  async create(@Body() dto: CreateAppointmentInputDto) {
    await this.validator.validate(dto);
    return this.creator.create(this.mapper.fromCreateAppointmentInputDto(dto));
  }

  @Patch(':id')
  @TransformToDto(AppointmentOutputDto)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentInputDto,
  ) {
    return await this.updater.update(
      id,
      this.mapper.fromUpdateAppointmentInputDto(dto),
    );
  }

  @Delete(':id')
  @TransformToDto(AppointmentOutputDto)
  async cancel(@Param('id') id: string) {
    return await this.updater.updateStatus(id, Status.canceled);
  }

  @Get('list-by-cpf/:cpf')
  @TransformToDto(ListAppointmentOutputDto)
  async listByCpf(@Param('cpf') cpf: string) {
    return await this.finder.listByCpf(cpf);
  }

  @Get('list')
  @UsePipes(new ValidationPipe({ transform: true }))
  @TransformToDto(ListAppointmentOutputDto)
  @UseInterceptors(CacheQueryInterceptor)
  async listByUserAndDate(@Query() query: ListAppointmentsQueryInputDto) {
    const { userId, from, to } = query;

    return this.finder.listByUserInRange(userId, new Date(from), new Date(to), {
      limit: query.limit,
      offset: query.offset,
    });
  }
}
