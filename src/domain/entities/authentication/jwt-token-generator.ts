import * as jwt from 'jsonwebtoken';
import { TokenGeneratorInterface } from './interfaces/token-generator.interface';

export class JwtTokenGenerator implements TokenGeneratorInterface {
  constructor(private readonly secret: string) {}

  async generate(payload: Record<string, any>): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/await-thenable
    return await jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }
}
