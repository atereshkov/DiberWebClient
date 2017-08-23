import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(): boolean {
    //if (this.authService.isUserLoggedIn()) {
    //  this.authService.logout();
    //}

    return !this.authService.isUserLoggedIn();
  }

}
