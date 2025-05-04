import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { Type } from 'class-transformer';

class CreateAccountDto {
  @IsNotEmpty()
  name: string;
}

export class CreateAccountAndFirstUserInputDto {
  @ValidateNested()
  @Type(() => CreateAccountDto)
  account: CreateAccountDto;

  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;
}
