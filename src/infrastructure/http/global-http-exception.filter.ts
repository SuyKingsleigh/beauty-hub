import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { SentryExceptionCaptured } from '@sentry/nestjs';
import * as Sentry from '@sentry/node';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalHttpExceptionFilter.name);

  @SentryExceptionCaptured()
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    const requestData = {
      method: request.method,
      url: request.originalUrl,
      headers: request.headers,
      query: request.query,
      params: request.params,
      body: request.body,
      ip: request.ip,
    };

    const user = request.user;
    if (user) {
      Sentry.setUser({
        id: user.id,
        accountId: user.accountId,
      });
    }

    Sentry.withScope((scope) => {
      scope.setExtras(requestData);
      Sentry.captureException(exception);
    });

    this.logger.error(`request ${request} failed`);
  }
}
