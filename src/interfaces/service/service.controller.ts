import { CreateServiceUseCase } from '../../application/service/create-service.use-case';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ServiceInputDto } from './dto/service.input.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { ServiceOutputDto } from './dto/service.output.dto';
import { CurrentUser } from '../authentication/decorators/current-user.decorator';
import { User } from '../../domain/user/entities/user.entity';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { ServiceMapper } from './mapper/service.mapper';

@Controller('/services')
@UseGuards(JwtAuthGuard)
export class ServiceController {
  constructor(private readonly creator: CreateServiceUseCase) {}

  @Post()
  @TransformToDto(ServiceOutputDto)
  create(@Body() input: ServiceInputDto, @CurrentUser() user: User) {
    return this.creator.create(ServiceMapper.toService(input));
  }
}
