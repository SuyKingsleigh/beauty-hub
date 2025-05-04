import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/authentication/auth.module';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';
import { AccountModule } from './domain/account/account.module';
import { EstablishmentModule } from './domain/establishment/establishment.module';
import { EstablishmentController } from './interfaces/establishment/establishment.controller';
import { CreateEstablishmentUseCase } from './application/establishment/create-establishment.use-case';

@Module({
  imports: [UserModule, AuthModule, AccountModule, EstablishmentModule],
  providers: [CurrentUserInterceptor],
})
export class AppModule {}
