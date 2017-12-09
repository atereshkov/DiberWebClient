import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {keys} from '../../constants/storage.keys';

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
    // this.authService.logout();
  }

  login() {
    this.loading = true;
    this.error = '';
    this.authService.login(this.username, this.password)
      .subscribe(data => {
          if (this.handleToken(data)) {
            this.handleUserInfo();
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
      .subscribe(data => {
          if (this.handleUser(data)) {
            this.loading = false;
            if (this.authService.isUserLoggedIn()) {
              this.navigateToDashboard();
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

  private handleToken(data: any): boolean {
    const access_token = data.access_token;
    const refresh_token = data.refresh_token;
    if (access_token && refresh_token) {
      localStorage.setItem(keys.TOKEN, JSON.stringify({
        access_token: access_token,
        refresh_token: refresh_token
      }));
      return true;
    } else {
      return false;
    }
  }

  private handleUser(data: any): boolean {
    if (data) {
      localStorage.setItem(keys.USER, JSON.stringify(data));
      return true;
    }
    return false;
  }

  private navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
