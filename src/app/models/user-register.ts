export class UserRegister {

  username: string;
  password: string;
  email: string;
  fullname: string;
  customer: boolean;
  courier: boolean;

  constructor(username: string, password: string, email: string, fullname: string, customer: boolean, courier: boolean) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
    this.customer = customer;
    this.courier = courier;
  }

}
