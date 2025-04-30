import {
  Body,
  Controller,
  Post,
  Inject,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateUserUseCase } from '../../application/user/create-user.use-case';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindUserUseCase } from '../../application/user/find-user.use-case';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { CurrentUser } from '../authentication/decorators/current-user.decorator';
import { User } from '../../domain/entities/user/user.entity';

@Controller('users')
export class UserController {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject(FindUserUseCase)
    private readonly findUserUseCase: FindUserUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  find(@CurrentUser() user: User) {
    return user;
  }

  @Get('/by-email/:email')
  async findByEmail(@Param('email') email: string) {
    return this.findUserUseCase.findByEmail(email);
  }
}
