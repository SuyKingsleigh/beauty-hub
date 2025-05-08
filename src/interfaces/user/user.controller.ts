import { Controller, Inject, Get, UseGuards, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/user/create-user.use-case';
import { FindUserUseCase } from '../../application/user/find-user.use-case';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { CurrentUser } from '../authentication/decorators/current-user.decorator';
import { User } from '../../domain/user/entities/user.entity';
import { TransformToDto } from '../transform/transform-to-dto.decorator';
import { UserOutputDto } from './dto/user.output.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly creator: CreateUserUseCase,
    @Inject(FindUserUseCase)
    private readonly finder: FindUserUseCase,
  ) {}

  @Get('me')
  @TransformToDto(UserOutputDto)
  me(@CurrentUser() user: User) {
    return user;
  }

  @Post()
  @TransformToDto(UserOutputDto)
  create(@Body() dto: CreateUserInputDto, @CurrentUser() admin: User) {
    return this.creator.create(dto, admin);
  }
}
