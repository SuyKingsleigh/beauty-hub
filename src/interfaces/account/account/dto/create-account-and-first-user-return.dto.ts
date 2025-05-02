import { UserDto } from '../../../user/dto/user.dto';
import { AccountDto } from './account.dto';

export class CreateAccountAndFirstUserReturnDto  {
  user: UserDto;
  account: AccountDto;
}