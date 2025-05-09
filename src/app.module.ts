import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/authentication/auth.module';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';
import { AccountModule } from './domain/account/account.module';
import { EstablishmentModule } from './domain/establishment/establishment.module';
import { ServiceModule } from './domain/service/service.module';
import { AppointmentModule } from './domain/appointment/appointment.module';
import { CustomerModule } from './domain/customer/customer.module';
import { SlotModule } from './domain/slot/slot.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    AccountModule,
    EstablishmentModule,
    ServiceModule,
    CustomerModule,
    AppointmentModule,
    SlotModule,
  ],
  providers: [CurrentUserInterceptor],
})
export class AppModule {}
