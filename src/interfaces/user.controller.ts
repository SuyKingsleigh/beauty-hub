import { Body, Controller, Post, Inject, Get, Param } from '@nestjs/common';
import { UserCreator } from '../application/user.creator';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserFinder } from '../application/UserFinder';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserCreator)
    private readonly createUserUseCase: UserCreator,

    @Inject(UserFinder)
    private readonly findUserUseCase: UserFinder,
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
