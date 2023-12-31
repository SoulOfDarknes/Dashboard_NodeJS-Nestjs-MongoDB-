import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) { }

  // async findAll(): Promise<Customer[]> {
  //   return this.customerModel.find().exec();
  // }
  async findAll(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    console.log(customers);
    return customers;
  }
}
