import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/authentication/auth.module';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';
import { AccountModule } from './domain/account/account.module';

@Module({
  imports: [UserModule, AuthModule, AccountModule],
  providers: [CurrentUserInterceptor],
})
export class AppModule {}
