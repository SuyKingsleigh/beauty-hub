import { Prisma } from 'generated/prisma';

/**
 * Cria um filtro onde o deletedAt deve ser diferente de nulo para todas as chamadas no banco de dados
 */
export function softDeleteMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    // todos os finds para as tabelas
    if (
      ['findUnique', 'findFirst', 'findMany'].includes(params.action) &&
      params.model &&
      ['Establishment', 'Account', 'User'].includes(params.model) // 👈 Models you want to filter
    ) {
      // caso nao tenha nenhum parametro cria manualmente
      if (!params.args) {
        params.args = {};
      }

      // caso nao haja where adiciona um where vazio
      if (!params.args.where) {
        params.args.where = {};
      }

      // Injeta apenas caso nao tenha sido explicitamente incluido
      if (!params.args.where.deletedAt) {
        params.args.where.deletedAt = null;
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return next(params);
  };
}
