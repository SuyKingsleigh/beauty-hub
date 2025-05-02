import { Controller, Inject, Get, UseGuards } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/user/create-user.use-case';
import { FindUserUseCase } from '../../application/user/find-user.use-case';
import { JwtAuthGuard } from '../../application/authentication/jwt.guard';
import { CurrentUser } from '../authentication/decorators/current-user.decorator';
import { User } from '../../domain/user/entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject(FindUserUseCase)
    private readonly findUserUseCase: FindUserUseCase,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  find(@CurrentUser() user: User) {
    return new UserDto(user);
  }
}
