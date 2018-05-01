import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserAuthority} from '../../helper/user.authority';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;
  public loading = false;
  public role = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadProfileData();
  }

  private loadProfileData() {
    const currentUser: User = UserAuthority.getCurrentUser();

    if (UserAuthority.isCustomer()) {
      this.role = 'Customer';
    } else if (UserAuthority.isCourier()) {
      this.role = 'Courier';
    } else if (UserAuthority.isAdmin()) {
      this.role = 'Admin';
    }

    this.loading = true;
    this.userService.getUser(currentUser.id)
      .subscribe((user: User) => {
        this.loading = false;
        this.user = user;
      });
  }

}
