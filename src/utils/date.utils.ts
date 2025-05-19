import { Weekday } from '../../generated/prisma';

export class DateUtils {
  /**
   * Converte uma string HH:mm para um Date baseado numa data de referência.
   */
  static mergeDateWithTime(baseDate: Date, timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const result = new Date(baseDate);
    result.setHours(hours, minutes, 0, 0);
    return result;
  }

  /**
   * Extrai o weekday (`monday`, `tuesday`, etc.) de uma data.
   */
  static getWeekdayFromDate(date: Date): Weekday {
    const days: Weekday[] = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];
    return days[date.getDay()];
  }

  /**
   * Verifica se duas datas estão no mesmo dia.
   */
  static isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  /**
   * Retorna uma lista de datas (sem horário) entre `from` e `to`, inclusivo.
   */
  static getDatesInRange(from: Date, to: Date): Date[] {
    const dates: Date[] = [];
    const current = new Date(from);
    current.setHours(0, 0, 0, 0);

    const endDate = new Date(to);
    endDate.setHours(0, 0, 0, 0);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }
}
