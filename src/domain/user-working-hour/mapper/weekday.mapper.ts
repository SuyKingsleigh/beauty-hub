import { Weekday } from '../../../../generated/prisma';

export class WeekdayMapper {
  static fromDate(date: Date): keyof typeof Weekday {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    const days: (keyof typeof Weekday)[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    return days[day];
  }
}
