// Import with `const Sentry = require("@sentry/nestjs");` if you are using CJS
import * as Sentry from '@sentry/nestjs';

Sentry.init({
  dsn: 'https://65c6628372f827c1e88a0c97c2cbef7f@o4509326828896256.ingest.us.sentry.io/4509326831452160',

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

process.on('unhandledRejection', (reason) => {
  Sentry.captureException(reason);
});

process.on('uncaughtException', (error) => {
  Sentry.captureException(error);
});
