export class User {
  id: number;
  //roles: Role[];
  username: string;
  password: string;
  email: string;
  fullname: string;

  constructor(id: number, username: string, password: string, email: string, fullname: string) {
    this.id = id;
    //this.roles = roles;
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
  }
}
