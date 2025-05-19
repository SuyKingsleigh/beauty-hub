import { SlotAvailabilityService } from '../../src/application/user/user-working-hour/slot/slot-availability.service';
import { parse } from 'date-fns';
import { UserWorkingHour, Weekday } from '../../generated/prisma';
import { AppointmentWithDuration } from '../../src/application/appointment/appointment-duration-calculator.service';
import { Slot } from 'src/domain/user/user-working-hour/slot/entities/slot.entity';

const finder = {
  findByUserIdAndEstablishmentIdAndWeekday: jest.fn(),
};

const appointments = [
  {
    start: parse('2025-05-16 08:00', 'yyyy-MM-dd HH:mm', new Date()),
    end: parse('2025-05-16 09:00', 'yyyy-MM-dd HH:mm', new Date()),
    durationInMinutes: 30,
  },
  {
    start: parse('2025-05-16 10:00', 'yyyy-MM-dd HH:mm', new Date()),
    end: parse('2025-05-16 12:00', 'yyyy-MM-dd HH:mm', new Date()),
    durationInMinutes: 120,
  },
] as AppointmentWithDuration[];

const workingHours = [
  {
    id: '1234-1234-1234-1234',
    establishmentId: '1111-2222-3333-4444',
    userId: '0000-9999-8888-7777',
    weekday: Weekday.friday,
    startTime: '08:00',
    endTime: '12:00',
  },
  {
    id: '1234-1234-1234-1234',
    establishmentId: '1111-2222-3333-4444',
    userId: '0000-9999-8888-7777',
    weekday: Weekday.friday,
    startTime: '13:00',
    endTime: '14:00',
  },
] as UserWorkingHour[];

const expectedSlots = [
  {
    start: parse('2025-05-16 09:00', 'yyyy-MM-dd HH:mm', new Date()),
    end: parse('2025-05-16 10:00', 'yyyy-MM-dd HH:mm', new Date()),
  },
  {
    start: parse('2025-05-16 13:00', 'yyyy-MM-dd HH:mm', new Date()),
    end: parse('2025-05-16 14:00', 'yyyy-MM-dd HH:mm', new Date()),
  },
] as Slot[];

describe('test slot availability service', () => {
  let slotAvailabilityService;

  beforeEach(() => {
    jest.clearAllMocks();
    slotAvailabilityService = new SlotAvailabilityService(finder as any);
  });

  it('should calculate hours', async () => {
    finder.findByUserIdAndEstablishmentIdAndWeekday.mockResolvedValue(
      workingHours,
    );

    const result: Slot[] = await slotAvailabilityService.findAvailableSlots(
      parse('2025-05-16 06:00', 'yyyy-MM-dd HH:mm', new Date()),
      parse('2025-05-16 21:00', 'yyyy-MM-dd HH:mm', new Date()),
      appointments,
      60,
      '0000-9999-8888-7777',
      '1111-2222-3333-4444',
    );

    expect(expectedSlots).toEqual(result);
  });
});
