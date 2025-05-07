export interface CreateAppointmentDto {
  id: string | undefined;
  establishmentId: string;
  customerId: string;
  userId: string;
  status: string;
  date: Date;
}
