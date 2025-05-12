import { Events } from '../../application/event-trigger/events.enum';

export interface DomainEventBus {
  publish(eventName: Events, paylod: any): void;
}
