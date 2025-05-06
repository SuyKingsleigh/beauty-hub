import { CreateServiceUseCase } from '../../application/service/create-service.use-case';
import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ServiceInputDto } from './dto/service.input.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { ServiceOutputDto } from './dto/service.output.dto';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { ServiceMapper } from './mapper/service.mapper';
import { FindServiceUseCase } from '../../application/service/find-service.use-case';
import { UpdateServiceUseCase } from '../../application/service/update-service.use-case';
import { UpdateServiceInputDto } from './dto/update-service.input.dto';
import { ServiceBelongsToAccountGuard } from './guard/service-belongs-to-account.guard';

@Controller('/services')
@UseGuards(JwtAuthGuard)
export class ServiceController {
  constructor(
    private readonly creator: CreateServiceUseCase,
    private readonly finder: FindServiceUseCase,
    private readonly updater: UpdateServiceUseCase,
  ) {}

  @Post()
  @TransformToDto(ServiceOutputDto)
  create(@Body() input: ServiceInputDto) {
    return this.creator.create(ServiceMapper.toService(input));
  }

  @Patch(':id')
  @TransformToDto(ServiceOutputDto)
  @UseGuards(ServiceBelongsToAccountGuard)
  update(@Param('id') id: string, @Body() input: UpdateServiceInputDto) {
    return this.updater.update(id, ServiceMapper.toPartialService(input));
  }
}
