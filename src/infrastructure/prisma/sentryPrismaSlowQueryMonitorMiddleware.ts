// src/prisma/middlewares/sentry.prisma.middleware.ts
import { Prisma } from 'generated/prisma';
import * as Sentry from '@sentry/node';
import { Logger } from '@nestjs/common';

const logger = new Logger('PrismaSentryMiddleware');

export function sentryPrismaSlowQueryMonitorMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const start = Date.now();
    const result = await next(params);
    const duration = Date.now() - start;

    if (duration > 200) {
      const message = `${params.model}.${params.action} took ${duration}ms`;
      logger.log(message);
      Sentry.addBreadcrumb({
        category: 'prisma',
        message,
        data: {
          duration,
          action: params.action,
          model: params.model,
          query: JSON.stringify(params),
        },
        level: 'info',
      });

      Sentry.captureMessage(message);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  };
}
