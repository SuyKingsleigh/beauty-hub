import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { FindServiceUseCase } from '../../../application/service/find-service.use-case';

@Injectable()
export class ServiceExistsPipe implements PipeTransform {
  constructor(private readonly serviceFinder: FindServiceUseCase) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const found = this.serviceFinder.findById(value);
    if (found !== null) {
      throw new NotFoundException(`Could not find object with ID ${value}`);
    }
    return found;
  }
}
