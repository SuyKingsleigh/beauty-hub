/**
 * Define os eventos que serão distribuidos para as filas do RabbitMQ
 */
export const Events = {
  appointment_scheduled: 'appointment.scheduled',
  appointment_date_changed: 'appointment.date_changed',
};

export type Events = (typeof Events)[keyof typeof Events];
