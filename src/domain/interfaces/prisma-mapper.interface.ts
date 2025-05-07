/**
 * @P => Classe gerada pelo PRISMA
 * @E => Entidade mapeada
 * @C => CreateEntityDto
 * @U => UpdateEntityDto
 */
export interface PrismaMapper<P, E, C, U> {
  fromPrisma(p: P): E;

  toPrisma(e: E): C;

  toPrismaPartial(e: Partial<E>): U;
}
