import { HashGeneratorInterface } from '../interfaces/hash-generator.interface';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashGenerator implements HashGeneratorInterface {
  hash(data: string): Promise<string> {
    return bcrypt.hash(data, 10);
  }
}
