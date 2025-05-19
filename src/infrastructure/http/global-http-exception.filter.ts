import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SentryExceptionCaptured } from '@sentry/nestjs';
import * as Sentry from '@sentry/node';
import { v4 as UUID } from 'uuid';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalHttpExceptionFilter.name);

  @SentryExceptionCaptured()
  catch(exception: any, host: ArgumentsHost) {
    this.logger.error(exception);
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    if (
      exception instanceof UnauthorizedException ||
      exception instanceof BadRequestException ||
      exception instanceof NotFoundException ||
      exception instanceof ForbiddenException
    ) {
      response.status(exception.getStatus()).json(exception.getResponse());
      return;
    }

    const errId = UUID();
    const requestData = {
      method: request.method,
      url: request.originalUrl,
      headers: request.headers,
      query: request.query,
      params: request.params,
      body: request.body,
      ip: request.ip,
      errId,
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
    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.getResponse());
    } else {
      response.status(500).json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        errId,
      });
    }
  }
}
