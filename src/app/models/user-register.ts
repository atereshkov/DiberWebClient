export class UserRegister {

  username: string;
  password: string;
  email: string;
  fullname: string;
  customer: boolean;
  courier: boolean;
  enabled: boolean;

  constructor(username: string, password: string, email: string, fullname: string, customer: boolean, courier: boolean, enabled: boolean) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
    this.customer = customer;
    this.courier = courier;
    this.enabled = enabled;
  }

}
