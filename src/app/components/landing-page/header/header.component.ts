import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user";
import {keys} from "../../../constants/storage.keys";
import {UserAuthority} from "../../../helper/user.authority";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [AuthService]
})
export class LandingHeaderComponent implements OnInit {

  public user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem(keys.USER));
    }
  }

  isAdmin(): boolean {
    return UserAuthority.isAdmin();
  }

  isCourier(): boolean {
    return UserAuthority.isCourier();
  }

  isCustomer(): boolean {
    return UserAuthority.isCustomer();
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
