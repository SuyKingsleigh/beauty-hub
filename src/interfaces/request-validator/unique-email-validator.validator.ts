import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserFinder } from '../../application/UserFinder';

@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userFinder: UserFinder) {}

  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    throw new Error('Method not implemented.');
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('Method not implemented.');
  }
}
