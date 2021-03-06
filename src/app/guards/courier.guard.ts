import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserAuthority} from '../helper/user.authority';

@Injectable()
export class CourierGuard implements CanActivate {

  constructor() {

  }

  canActivate(): boolean {
    return UserAuthority.isCourier();
  }

}
