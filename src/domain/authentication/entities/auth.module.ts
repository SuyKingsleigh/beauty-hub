import { forwardRef, Module } from '@nestjs/common';
import { AuthenticationController } from '../../../interfaces/authentication/authentication.controller';
import { HashComparer } from './bcrypt-hash-comparer';
import { JwtTokenGenerator } from './jwt-token-generator';
import { AuthenticateUserUseCase } from '../../../application/authentication/authenticate-user.use-case';
import { UserModule } from '../../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../../application/authentication/jwt-strategy';

@Module({
  controllers: [AuthenticationController],
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [
    JwtStrategy,
    {
      provide: HashComparer,
      useClass: HashComparer,
    },
    {
      provide: JwtTokenGenerator,
      useFactory: () =>
        new JwtTokenGenerator(process.env.JWT_SECRET || 'default-secret'),
    },
    {
      provide: AuthenticateUserUseCase,
      useFactory: (repo, hasher, jwt) =>
        new AuthenticateUserUseCase(repo, hasher, jwt),
      inject: ['UserRepository', HashComparer, JwtTokenGenerator],
    },
  ],
})
export class AuthModule {}
