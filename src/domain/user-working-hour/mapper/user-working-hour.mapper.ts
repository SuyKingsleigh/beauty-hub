import {
  Establishment,
  User,
  UserWorkingHour as PrismaUserWorkingHour,
} from 'generated/prisma';
import { UserWorkingHour } from '../entities/user-working-hour.entity';
import { EstablishmentMapper } from '../../establishment/mapper/establishment.mapper';

export class UserWorkingHourMapper {
  static fromPrisma(
    db: PrismaUserWorkingHour & { establishment: Establishment; user: User },
  ): UserWorkingHour {
    return new UserWorkingHour(
      db.id,
      db.establishmentId,
      db.userId,
      db.weekday,
      db.startTime,
      db.endTime,
      db.createdAt!,
      db.updatedAt ?? undefined,
      db.deletedAt ?? undefined,
      EstablishmentMapper.fromPrisma(db.establishment),
      db.user,
    );
  }

  static toPrisma(dto: UserWorkingHour) {
    return {
      id: undefined,
      establishmentId: dto.establishmentId,
      userId: dto.userId,
      weekday: dto.weekday,
      startTime: dto.startTime,
      endTime: dto.endTime,
    };
  }
}
