import {
  CreateUserInput,
  CreateUserUseCase,
} from '../user/create-user.use-case';
import { AccountRepository } from '../../domain/account/repository/account.repository.interface';
import { Account } from '../../domain/account/entities/account.entity';
import { User } from '../../domain/user/entities/user.entity';

interface CreateAccountInput {
  name: string;
}

export interface CreateAccountAndUserUseCaseInput {
  account: CreateAccountInput;
  user: CreateUserInput;
}

export interface CreateAccountAndUserOutput {
  account: Account;
  user: User;
}

/**
 * Toda nova conta deve possuir um usuário
 * Entào essa classe cria a conta e o seu primeiro usuário
 */
export class CreateAccountUseCase {
  constructor(
    private readonly repository: AccountRepository,
    private readonly userCreator: CreateUserUseCase,
  ) {}

  private createAccount(
    createAccountInput: CreateAccountInput,
  ): Promise<Account> {
    const account = new Account(null, createAccountInput.name, new Date());
    return this.repository.create(account);
  }

  private createFirstUser(createUserInput: CreateUserInput, account: Account) {
    return this.userCreator.create(createUserInput, account);
  }

  /**
   * Cria uma conta e um usuário
   */
  async execute(
    input: CreateAccountAndUserUseCaseInput,
  ): Promise<CreateAccountAndUserOutput> {
    const account = await this.createAccount(input.account);
    const user = await this.createFirstUser(input.user, account);
    return {
      account,
      user,
    };
  }
}
