import { UserDto } from '../../user/dto/user.dto';
import { AccountDto } from './account.dto';

export class CreateAccountAndFirstUserOutputDto {
  user: UserDto;
  account: AccountDto;
}
