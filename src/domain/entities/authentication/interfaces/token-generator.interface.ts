export interface TokenGeneratorInterface {
  generate(payload: Record<string, any>): Promise<string>;
}
