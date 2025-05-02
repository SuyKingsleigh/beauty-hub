export interface HashComparerInterface {
  compare(data: string, encrypted: string): Promise<boolean>;
}
