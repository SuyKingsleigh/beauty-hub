import { Customer } from '../entities/customer.entity';
import { Crud } from '../../interfaces/crud.interface';
import { CustomerMapper } from '../mapper/customer.mapper';

export interface CustomerRepository extends Crud<Customer> {
  mapper: CustomerMapper;
}
