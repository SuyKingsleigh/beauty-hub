import { IsNotEmpty } from 'class-validator';
import { UniqueEmail } from '../../request-validator/unique-email.validator';

export class CreateUserInputDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @UniqueEmail({ message: 'Email já em uso!' })
  email: string;

  @IsNotEmpty()
  password: string;
}
