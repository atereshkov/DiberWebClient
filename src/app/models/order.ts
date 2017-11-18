import {User} from './user';
import {Address} from './address';

export class Order {

  id: number;
  date: string;
  description: string;
  price: number;
  status: string;
  addressFrom: Address;
  addressTo: Address;
  customer: User;
  courier: User;

  constructor(id: number, date: string, description: string, price: number, status: string, addressFrom: Address, addressTo: Address, customer: User, courier: User) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.price = price;
    this.status = status;
    this.addressFrom = addressFrom;
    this.addressTo = addressTo;
    this.customer = customer;
    this.courier = courier;
  }

}
