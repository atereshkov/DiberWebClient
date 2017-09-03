import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user";
import {keys} from "../../../constants/storage.keys";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [AuthService]
})
export class LandingHeaderComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem(keys.TOKEN));
    }
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
