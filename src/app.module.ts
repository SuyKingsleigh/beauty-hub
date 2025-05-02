import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/authentication/entities/auth.module';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';

@Module({
  imports: [UserModule, AuthModule],
  providers: [CurrentUserInterceptor],
})
export class AppModule {}
