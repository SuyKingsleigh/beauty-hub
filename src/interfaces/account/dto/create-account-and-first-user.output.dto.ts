import { UserOutputDto } from '../../user/dto/user.output.dto';
import { AccountDto } from './account.dto';

export class CreateAccountAndFirstUserOutputDto {
  user: UserOutputDto;
  account: AccountDto;
}
