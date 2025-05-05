import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformToDtoInterceptor implements NestInterceptor {
  constructor(private readonly dtoClass: new (...args: any[]) => any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => new this.dtoClass(data)));
  }
}
