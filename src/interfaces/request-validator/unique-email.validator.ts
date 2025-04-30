import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { FindUserUseCase } from '../../application/user/find-user.use-case';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userFinder: FindUserUseCase) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const found = await this.userFinder.findByEmail(value);
    const exists = !!found;
    return !exists;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (obj: object, propertyName: string) => {
    return registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
