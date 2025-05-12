import { HashComparerInterface } from '../interfaces/hash-comparer.interface';
import * as bcrypt from 'bcrypt';

/**
 * Implementa um hasher
 */
export class HashComparer implements HashComparerInterface {
  async compare(data: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(data, encrypted);
  }
}
