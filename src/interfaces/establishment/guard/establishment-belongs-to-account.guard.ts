import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindEstablishmentUseCase } from '../../../application/establishment/find-establishment.use-case';

@Injectable()
export class EstablishmentBelongsToAccountGuard implements CanActivate {
  constructor(private readonly finder: FindEstablishmentUseCase) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const id = request.params.id;

    const establishment = await this.finder.findById(id);
    if (!establishment) {
      throw new NotFoundException(`Could not find object with ID ${id}`);
    }
    const accountId = establishment.accountId;

    if (user.accountId !== accountId) {
      throw new ForbiddenException('You do not have access to this resource');
    }

    return true;
  }
}
