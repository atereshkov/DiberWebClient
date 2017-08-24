export class Order {

  id: number;
  date: string;
  description: string;
  price: number;
  status: string;
  //shop: Shop;
  //address: Address;
  //customer: User;

  constructor(id: number, date: string, description: string, price: number, status: string) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.price = price;
    this.status = status;
  }

  public static fromJSON(data: string): Order {
    let jsonData = JSON.parse(data);
    return new Order(jsonData.id, jsonData.date, jsonData.description, jsonData.price, jsonData.status);
  }

}
