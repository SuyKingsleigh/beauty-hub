import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import * as amqplib from 'amqplib';
import { DomainEventBus } from '../../domain/events/domain-event.bus';
import * as Sentry from '@sentry/node';

/**
 * Caso de uso do barramento de eventos.
 * Implementa a emissão de eventos para microsserviços usando o RabbitMQ
 */
@Injectable()
export class RabbitMqEventBus
  implements OnModuleInit, OnModuleDestroy, DomainEventBus
{
  private connection: amqplib.Connection;
  private channel: amqplib.ConfirmChannel;
  private logger = new Logger(RabbitMqEventBus.name);

  async onModuleInit() {
    this.connection = await amqplib.connect('amqp://localhost');
    this.channel = await this.connection.createConfirmChannel();
  }

  async publish(queueName: string, data: any): Promise<void> {
    const payload = Buffer.from(
      JSON.stringify({
        pattern: queueName,
        data,
      }),
    );
    await this.channel.assertQueue(queueName, { durable: true });
    this.logger.log(`Publicando mensagem ${payload} na fila ${queueName}`);
    return new Promise((resolve, reject) => {
      this.channel.sendToQueue(
        queueName,
        payload,
        { persistent: true },
        (err, ok) => {
          if (err) {
            this.logger.error('Erro ao publicar no RabbitMQ:', err);
            Sentry.withScope((scope) => {
              scope.setExtras({
                context: 'RabbitMQ',
                queue: queueName,
                payload: payload,
              });

              Sentry.captureException(err);
            });
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return reject(err);
          }
          this.logger.log(`Mensagem publicada com sucesso!`);
          resolve();
        },
      );
    });
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }
}
