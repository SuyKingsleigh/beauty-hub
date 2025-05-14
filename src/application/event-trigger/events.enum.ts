/**
 * Define os eventos que serão distribuidos para as filas do RabbitMQ
 */
export const Queues = {
  appointment_created: 'appointment.created',
  appointment_date_changed: 'appointment.date_changed',
  appointment_cancelled: 'appointment.cancelled',
};

export const Exchanges = {
  appointment: 'appointment.exchange',
};

export type Exchange = (typeof Exchanges)[keyof typeof Exchanges];
export type Queue = (typeof Queues)[keyof typeof Queues];
