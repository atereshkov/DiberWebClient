import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserAuthority} from "../../helper/user.authority";
import {User} from "../../models/user";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  username = '';
  password = '';
  loading = false;
  error = '';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    //this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password)
      .subscribe(result => {
          if (result === true) {
            this.handleUserInfo()
          } else {
            this.error = 'Authentication error';
            this.loading = false;
          }
        },
        error => {
          this.error = 'Authentication error';
          this.loading = false;
        });
  }

  private handleUserInfo() {
    this.authService.getUserInfo()
      .subscribe(result => {
          if (result === true) {
            this.loading = false;
            if (this.authService.isUserLoggedIn()) {
              this.navigateToDashboard()
            }
          } else {
            this.error = 'Authentication error';
            this.loading = false;
          }
        },
        error => {
          this.error = 'Authentication error';
          this.loading = false;
        });
  }

  private navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
