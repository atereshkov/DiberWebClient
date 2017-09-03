import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from "../../services/register.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  user: User;
  loading = false;
  error = '';


  constructor(private router: Router, private registerService: RegisterService) {

  }

  ngOnInit() {
    this.user = new User(0, "", "", "", "", []);
  }

  register() {
    /*
    this.loading = true;
    this.registerService.register(this.username, this.password)
      .subscribe(result => {
          if (result === true) {
            //if (this.registerService.isUserLoggedIn()) {
            //  this.router.navigate(['/home']);
            //}
          } else {
            this.error = 'Authentication error';
            this.loading = false;
          }
        },
        error => {
          this.error = 'Authentication error';
          this.loading = false;
        });
     */
  }

}
