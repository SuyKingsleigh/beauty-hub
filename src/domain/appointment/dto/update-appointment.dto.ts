export interface UpdateAppointmentDto {
  establishmentId?: string;
  customerId?: string;
  userId?: string;
  status?: string;
  date?: Date;
  serviceIds?: string[];
}
