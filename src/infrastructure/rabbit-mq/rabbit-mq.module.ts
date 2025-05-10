import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'APPOINTMENT_EVENTS',
        transport: Transport.RMQ,
        options: {
          urls: ['ampq://localhost:5672'],
          queue: 'appointments',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
})
export class RabbitMqModule {}
