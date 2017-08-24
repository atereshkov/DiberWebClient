export class User {
  id: number;
  //roles: Role[];
  username: string;
  password: string;
  email: string;
  fullname: string;

  constructor(id: number, username: string, password: string, email: string, fullname: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
  }

  public static fromJSON(data: string): User {
    let jsonData = JSON.parse(data);
    return new User(jsonData.id, jsonData.username, jsonData.password, jsonData.email, jsonData.fullname);
  }

}
