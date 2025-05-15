import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { CurrentUserInterceptor } from './interfaces/authentication/current-user.interceptor';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GlobalHttpExceptionFilter } from './infrastructure/http/global-http-exception.filter';
import './instrument';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'appointments',
      queueOptions: { durable: true },
    },
  });

  await app.startAllMicroservices();

  app.useGlobalInterceptors(app.get(CurrentUserInterceptor));
  app.useGlobalFilters(app.get(GlobalHttpExceptionFilter));
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
