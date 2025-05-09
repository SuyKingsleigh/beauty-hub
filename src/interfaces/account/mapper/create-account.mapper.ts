import { CreateAccountAndFirstUserInputDto } from '../dto/create-account-and-first-user.input.dto';
import {
  CreateAccountAndUserUseCaseInput,
  CreateAccountInput,
} from '../../../application/account/create-account.use-case';
import { CreateUserInput } from '../../../application/user/create-user.use-case';
import { AccountDto } from '../dto/account.dto';
import { UserOutputDto } from '../../user/dto/user.output.dto';
import { User } from '../../../domain/user/entities/user.entity';
import { Account } from '../../../domain/account/entities/account.entity';

export class CreateAccountMapper {
  static toUseCaseInput(
    dto: CreateAccountAndFirstUserInputDto,
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

  static toCreateAccountAndUserReturnDto(user: User, account: Account) {
    return {
      account: {
        id: account.id!,
        name: account.name,
      } satisfies AccountDto,
      user: {
        id: user.id!,
        name: user.name,
        email: user.email,
      } satisfies UserOutputDto,
    };
  }
}
