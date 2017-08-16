import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-landing-header',
  templateUrl: 'landing-header.component.html',
  styleUrls: ['landing-header.component.css'],
  providers: [AuthService]
})
export class LandingHeaderComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isUserLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
