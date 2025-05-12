import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Events } from './events.enum';
import { DomainEventBus } from '../../domain/events/domain-event.bus';
import { EVENT_BUS } from '../../domain/events/consts';

/**
 * Caso de uso do barramento de eventos.
 * Implementa a emissão de eventos para microsserviços usando o RabbitMQ
 */
@Injectable()
export class RabbitMqEventBus implements DomainEventBus {
  constructor(@Inject(EVENT_BUS) private readonly client: ClientProxy) {}

  publish(queueName: Events, data: any) {
    this.client.emit(queueName, data);
  }
}
