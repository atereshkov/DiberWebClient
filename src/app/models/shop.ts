export class Shop {

  id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  public static fromJSON(data: string): Shop {
    let jsonData = JSON.parse(data);
    return new Shop(jsonData.id, jsonData.name, jsonData.address);
  }

}
