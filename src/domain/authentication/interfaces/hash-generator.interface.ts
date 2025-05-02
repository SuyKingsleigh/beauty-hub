export interface HashGeneratorInterface {
  hash(data: string): Promise<string>;
}
