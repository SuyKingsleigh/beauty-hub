import { UseInterceptors, applyDecorators } from '@nestjs/common';
import { TransformToDtoInterceptor } from './transform-to-dto.interceptor';

export function TransformToDto(dtoClass: any) {
  return applyDecorators(
    UseInterceptors(new TransformToDtoInterceptor(dtoClass)),
  );
}
