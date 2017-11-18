import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {keys} from '../../constants/storage.keys';
import {UserAuthority} from '../../helper/user.authority';
import {User} from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor(private authService: AuthService) {
  }

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

}
