import { Body, Controller, Post, Inject, Get, Param } from '@nestjs/common';
import { CreateUserUseCase } from '../application/create-user.use-case';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindUserUseCase } from '../application/find-user.use-case';

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

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.findUserUseCase.findById(id);
  }

  @Get('/by-email/:email')
  async findByEmail(@Param('email') email: string) {
    return this.findUserUseCase.findByEmail(email);
  }
}
