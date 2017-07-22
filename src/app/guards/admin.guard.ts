import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    // TODO check user roles
    return true;
  }

}
