import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserInputDto } from '../../user/dto/create-user.input.dto';
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
  @Type(() => CreateUserInputDto)
  user: CreateUserInputDto;
}
