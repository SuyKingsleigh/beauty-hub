import { CreateAccountAndFirstUserDto } from '../dto/create-account-and-first-user.dto';
import {
  CreateAccountAndUserUseCaseInput,
  CreateAccountInput,
} from '../../../../application/account/create-account.use-case';
import { CreateUserInput } from '../../../../application/user/create-user.use-case';

export class CreateAccountMapper {
  static toUseCaseInput(
    dto: CreateAccountAndFirstUserDto,
  ): CreateAccountAndUserUseCaseInput {
    return {
      account: {
        name: dto.account.name,
      } satisfies CreateAccountInput,
      user: {
        name: dto.user.name,
        email: dto.user.email,
        password: dto.user.password, // vai ser transformado em hash no use case
      } satisfies CreateUserInput,
    };
  }

}
