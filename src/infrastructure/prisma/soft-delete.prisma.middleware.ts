import { Prisma } from 'generated/prisma';

const FIND = ['findUnique', 'findFirst', 'findMany'];
const TABLES = ['Establishment', 'Account', 'User'];

export function softDeleteMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const isReadAction = FIND.includes(params.action);
    const isSoftDeletableModel = TABLES.includes(params.model ?? '');

    if (isReadAction && isSoftDeletableModel) {
      const originalWhere = params.args?.where ?? {};
      const hasExplicitDeletedAt =
        JSON.stringify(originalWhere).includes('"deletedAt"');

      if (!hasExplicitDeletedAt) {
        params.args.where = {
          AND: [originalWhere, { deletedAt: null }],
        };
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return next(params);
  };
}
