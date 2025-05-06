// src/prisma/middleware/soft-delete.middleware.ts

import { Prisma, PrismaClient } from 'generated/prisma';

const TABLES = ['Establishment', 'Account', 'User', 'Service'];
const ACTIONS_WITH_FILTER = ['findMany', 'findFirst'];
const ACTIONS_WITH_UNIQUE_WHERE = ['findUnique', 'update', 'delete'];

export function softDeleteMiddleware(prisma: PrismaClient): Prisma.Middleware {
  return async (params, next) => {
    const { model, action } = params;
    const isSoftDeletable = TABLES.includes(model ?? '');
    const originalWhere = params.args?.where ?? {};
    const hasDeletedAt = JSON.stringify(originalWhere).includes('"deletedAt"');

    if (!isSoftDeletable || hasDeletedAt) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return next(params);
    }

    if (ACTIONS_WITH_FILTER.includes(action)) {
      params.args.where = {
        AND: [originalWhere, { deletedAt: null }],
      };
    }

    if (action === 'findUnique') {
      params.action = 'findFirst';
      params.args.where = {
        AND: [originalWhere, { deletedAt: null }],
      };
    }

    if (['update', 'delete'].includes(action)) {
      // Executa findFirst no model correspondente via PrismaClient
      const modelDelegate = (prisma as any)[
        model!.charAt(0).toLowerCase() + model!.slice(1)
      ];

      const existing = await modelDelegate.findFirst({
        where: {
          AND: [originalWhere, { deletedAt: null }],
        },
      });

      if (!existing) {
        throw new Error(
          `Attempted ${action} on a soft-deleted ${model}. Operation blocked.`,
        );
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return next(params);
  };
}
