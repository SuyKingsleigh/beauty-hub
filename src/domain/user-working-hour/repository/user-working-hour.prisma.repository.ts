import { UserWorkingHour } from '../entities/user-working-hour.entity';
import { UserWorkingHourRepository } from './user-working-hour.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UserWorkingHourMapper } from '../mapper/user-working-hour.mapper';
import { Weekday } from 'generated/prisma';

@Injectable()
export class UserWorkingHourPrismaRepository
  implements UserWorkingHourRepository
{
  constructor(private readonly prisma: PrismaService) {}

  include = {
    user: true,
    establishment: true,
  };

  async findByUserIdAndEstablishmentIdAndWeekday(
    userId: string,
    establishmentId: string,
    weekday: Weekday,
  ): Promise<UserWorkingHour[]> {
    const found = await this.prisma.userWorkingHour.findMany({
      where: {
        userId,
        establishmentId,
        weekday,
      },
      include: this.include,
    });

    return found.map((f) => UserWorkingHourMapper.fromPrisma(f));
  }

  async create(workingHour: UserWorkingHour): Promise<UserWorkingHour> {
    const created = await this.prisma.userWorkingHour.create({
      data: UserWorkingHourMapper.toPrisma(workingHour),
      include: this.include,
    });

    return UserWorkingHourMapper.fromPrisma(created);
  }

  findById(id: string): Promise<UserWorkingHour | null> {
    throw new Error('Method not implemented.');
  }

  updatePartial(
    id: string,
    partial: Partial<UserWorkingHour>,
  ): Promise<UserWorkingHour> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<UserWorkingHour> {
    throw new Error('Method not implemented.');
  }

  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
