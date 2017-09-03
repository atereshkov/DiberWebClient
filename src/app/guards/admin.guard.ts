import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserAuthority} from "../helper/user.authority";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    return UserAuthority.isAdmin();
  }

}
