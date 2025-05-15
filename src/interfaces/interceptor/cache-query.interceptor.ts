// interceptors/cache-query.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
  Logger,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as crypto from 'crypto';

@Injectable()
export class CacheQueryInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  logger = new Logger(CacheQueryInterceptor.name);

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const query = request.query;

    const url = request.originalUrl;
    const method = request.method;

    // Criar uma chave hash única baseada na query e rota
    const keyBase = `${method}:${url}:${JSON.stringify(query)}`;
    const cacheKey = `cache:${crypto.createHash('md5').update(keyBase).digest('hex')}`;
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) {
      this.logger.log(`cached data found by key ${cacheKey}`);
      return from([cached]);
    }

    return next.handle().pipe(
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      tap(async (response) => {
        this.logger.log(`saving to cache ${cacheKey}`);
        await this.cacheManager.set(cacheKey, response, 15 * 1000); // Add `ttl` as object
      }),
    );
  }
}
