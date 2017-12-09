import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../../services/register.service';
import {Register} from '../../models/register';
import {keys} from "../../constants/storage.keys";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  user: Register;
  loading = false;
  error = '';

  constructor(private router: Router, private registerService: RegisterService) {

  }

  ngOnInit() {
    this.user = new Register('', '', '', '', false, false);
  }

  register() {
    // TODO Verify fields, etc.
    this.loading = true;
    this.registerService.register(this.user)
      .subscribe(data => {
          if (this.handleUserInfo(data)) {
            this.router.navigate(['/signin']);
          } else {
            this.error = 'Registration error';
            this.loading = false;
          }
        },
        error => {
          this.error = 'Registration error';
          this.loading = false;
        });
  }

  private handleUserInfo(data: any): boolean {
    console.log(data);
    const user = data;
    if (user) {
      localStorage.setItem(keys.USER, JSON.stringify(user));
      return true;
    }
    return false;
  }

}
