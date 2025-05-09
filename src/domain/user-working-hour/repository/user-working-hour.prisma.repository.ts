import { UserWorkingHour } from '../user-working-hour.entity';
import { UserWorkingHourRepository } from './user-working-hour.repository.interface';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserWorkingHourPrismaRepository
  implements UserWorkingHourRepository
{
  constructor(private readonly prisma: PrismaService) {}

  create(workingHour: UserWorkingHour): Promise<UserWorkingHour> {
    throw new Error('Method not implemented.');
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
