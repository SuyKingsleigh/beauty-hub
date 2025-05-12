import { Events } from '../../application/event-trigger/events.enum';

/**
 * Para respeitar o principio DIP foi criada essa interface.
 * Dessa forma não precisa depender de uma implementação de uma classe mas sim de sua abstração
 */
export interface DomainEventBus {
  publish(eventName: Events, paylod: any): void | Promise<void>;
}
