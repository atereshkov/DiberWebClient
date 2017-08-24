import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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
            if (this.authService.isUserLoggedIn()) {
              this.router.navigate(['/home']);
            }
            let token = JSON.parse(localStorage.getItem('currentUser')).access_token;
            this.authService.getUserInfo(token);
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

}
