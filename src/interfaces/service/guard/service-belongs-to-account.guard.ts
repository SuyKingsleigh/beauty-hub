import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindServiceUseCase } from '../../../application/service/find-service.use-case';

@Injectable()
export class ServiceBelongsToAccountGuard implements CanActivate {
  constructor(private readonly serviceFinder: FindServiceUseCase) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const serviceId = request.params.id;

    const service = await this.serviceFinder.findById(serviceId);

    if (!service || !service.establishment || !service.establishment.account) {
      throw new NotFoundException(
        `Service with ID ${serviceId} not found or missing relations`,
      );
    }

    const accountId = service.establishment.account.id;

    if (user.accountId !== accountId) {
      throw new ForbiddenException('You do not have access to this resource');
    }

    return true;
  }
}
