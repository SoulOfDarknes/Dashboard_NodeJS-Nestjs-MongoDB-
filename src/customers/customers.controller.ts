import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customers.module';
import { Customer } from '../schemas/customer.schema';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
