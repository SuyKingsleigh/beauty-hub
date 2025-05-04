// current-user.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { FindUserUseCase } from '../../application/user/find-user.use-case';

/**
 * Intercepta um request antes de ser processado
 * Obtém o usuário através do retorno do JWT
 */
@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(
    @Inject(FindUserUseCase)
    private readonly finder: FindUserUseCase,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    const userId: string = request.user?.sub ?? request.user?.id;
    if (userId) {
      try {
        request.currentUser = await this.finder.findById(userId);
      } catch (err) {
        request.currentUser = null;
      }
    }

    return next.handle();
  }
}
