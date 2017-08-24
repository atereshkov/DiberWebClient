export class Role {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static fromJSON(data: string): Role {
    let jsonData = JSON.parse(data);
    return new Role(jsonData.name);
  }

}
