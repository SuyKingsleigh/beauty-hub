import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqEventBus } from '../../application/event-trigger/rabbit-mq-event.bus';
import { DOMAIN_EVENT_BUS, EVENT_BUS } from '../../domain/events/consts';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: EVENT_BUS,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'appointments',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [
    RabbitMqEventBus,
    {
      provide: DOMAIN_EVENT_BUS,
      useExisting: RabbitMqEventBus,
    },
  ],
  exports: [DOMAIN_EVENT_BUS],
})
export class RabbitMqModule {}
