import {keys} from "../constants/storage.keys";
import {User} from "../models/user";

export class UserAuthority {

  public static isAdmin(): boolean {
    return UserAuthority.has("ROLE_ADMIN");
  }

  public static isCustomer(): boolean {
    return UserAuthority.isAdmin() || UserAuthority.has("ROLE_CUSTOMER");
  }

  public static isCourier(): boolean {
    return UserAuthority.isAdmin() || UserAuthority.has("ROLE_COURIER");
  }

  static has(role: string): boolean {
    const user: User = this.getCurrentUser();
    if (user != null) {
      return user.roles.some(userRole => userRole.name === role)
    }
  }

  public static getCurrentUser(): User {
    return JSON.parse(localStorage.getItem(keys.USER));
  }

}
