import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions, ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

export interface ValidLinkOptions {
  mustContain?: string;
}

@Injectable()
@ValidatorConstraint({ async: true })
export class ValidLinkValidator implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments): Promise<boolean> | boolean {
    if (typeof value !== 'string') {
      return false;
    }

    const options = args?.constraints[0] as ValidLinkOptions;

    if (options?.mustContain && !value.includes(options.mustContain)) {
      return false;
    }

    return value.startsWith('http');
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'must be a valid link';
  }
}

export function ValidLink(
  validLinkOptions: ValidLinkOptions,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [validLinkOptions],
      validator: ValidLinkValidator,
    });
  };
}
