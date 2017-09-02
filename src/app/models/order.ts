import {User} from "./user";
import {Address} from "./address";
import {Shop} from "./shop";

export class Order {

  id: number;
  date: string;
  description: string;
  price: number;
  status: string;
  shop: Shop;
  address: Address;
  customer: User;
  courier: User;

  constructor(id: number, date: string, description: string, price: number, status: string, shop: Shop, address: Address, customer: User, courier: User) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.price = price;
    this.status = status;
    this.shop = shop;
    this.address = address;
    this.customer = customer;
    this.courier = courier;
  }

  public static fromJSON(data: string): Order {
    let jsonData = JSON.parse(data);
    return new Order(jsonData.id, jsonData.date, jsonData.description, jsonData.price, jsonData.status,
      jsonData.shop, jsonData.address, jsonData.customer, jsonData.courier);
  }

}
