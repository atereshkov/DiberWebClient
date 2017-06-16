export class User {
  id: string;
  roles: Role[];
  username: string;
  password: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;

  constructor(id: string, roles: Role[], username: string, password: string,
              accountNonExpired: boolean, accountNonLocked: boolean, credentialsNonExpired: boolean,
              enabled: boolean) {
    this.id = id;
    this.roles = roles;
    this.username = username;
    this.password = password;
    this.accountNonExpired = accountNonExpired;
    this.accountNonLocked = accountNonLocked;
    this.credentialsNonExpired = credentialsNonExpired;
    this.enabled = enabled;
  }
}
