import {
  AuthenticateUserUseCase,
  AuthInput,
} from '../../application/authentication/authenticate-user.use-case';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('auth')
export class AuthenticationController {
  constructor(
    @Inject(AuthenticateUserUseCase)
    private readonly authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthInput) {
    return this.authenticateUserUseCase.execute(dto);
  }
}
