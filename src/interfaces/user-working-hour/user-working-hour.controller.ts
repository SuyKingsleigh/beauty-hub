import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { CreateUserWorkingHourUseCase } from '../../application/user-working-hour/create-user-working-hour.use-case';
import { CreateUserWorkingHourInputDto } from './dto/create-user-working-hour.input.dto';
import { UserWorkingHourOutputDto } from './dto/user-working-hour.output.dto';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { CurrentUser } from '../authentication/decorators/current-user.decorator';
import { User } from '../../domain/user/entities/user.entity';

// @UseGuards(JwtAuthGuard)
@Controller('user-working-hours')
export class UserWorkingHourController {
  constructor(private readonly creator: CreateUserWorkingHourUseCase) {}

  @Post()
  @TransformToDto(UserWorkingHourOutputDto)
  async create(
    @Body() dto: CreateUserWorkingHourInputDto,
    @CurrentUser() user: User,
  ) {
    if (!dto.userId) {
      dto.userId = user.id!;
    }
    return await this.creator.create({ id: undefined, ...dto });
  }
}
