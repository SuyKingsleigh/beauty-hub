import { FindCustomerUseCase } from '../../application/customer/find-customer.use-case';
import { Injectable } from '@nestjs/common';
import {
  isValidationOptions,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueCpfValidator implements ValidatorConstraintInterface {
  constructor(private readonly finder: FindCustomerUseCase) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const found = await this.finder.findByCpf(value);
    const exists = !!found;
    return !exists;
  }
}

export const UniqueCPF = (validationOptions: ValidationOptions) => {
  return (obj: object, propertyName: string) => {
    return registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueCpfValidator,
    });
  };
};
