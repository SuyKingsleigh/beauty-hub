import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { AuthModule } from './domain/authentication/auth.module';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';
import { AccountModule } from './domain/account/account.module';
import { EstablishmentModule } from './domain/establishment/establishment.module';
import { ServiceModule } from './domain/service/service.module';
import { AppointmentModule } from './domain/appointment/appointment.module';
import { CustomerModule } from './domain/customer/customer.module';
import { SlotModule } from './domain/user/user-working-hour/slot/slot.module';
import { UserWorkingHourModule } from './domain/user/user-working-hour/user-working-hour.module';
import { RabbitMqModule } from './infrastructure/rabbit-mq/rabbit-mq.module';
import { RedisModule } from './infrastructure/redis/redis.module';
import { GlobalHttpExceptionFilter } from './infrastructure/http/global-http-exception.filter';
import { SentryModule } from '@sentry/nestjs/setup';

@Module({
  imports: [
    SentryModule.forRoot(),
    UserModule,
    AuthModule,
    AccountModule,
    EstablishmentModule,
    ServiceModule,
    CustomerModule,
    AppointmentModule,
    SlotModule,
    UserWorkingHourModule,
    RabbitMqModule,
    RedisModule,
  ],
  providers: [CurrentUserInterceptor, GlobalHttpExceptionFilter],
})
export class AppModule {}
