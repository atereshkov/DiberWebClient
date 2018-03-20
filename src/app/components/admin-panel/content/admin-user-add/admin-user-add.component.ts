import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {UserRegister} from '../../../../models/dto/user-register';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {

  public userDataForm: FormGroup;
  private formBuilder: FormBuilder;

  loading = false;

  constructor(private userService: UserService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
  }

  ngOnInit() {

  }

  public saveUserData() {
    this.loading = true;

    const user: UserRegister = {
      username: this.userDataForm.value.username,
      password: this.userDataForm.value.password,
      email: this.userDataForm.value.email,
      fullname: this.userDataForm.value.fullname,
      customer: this.userDataForm.value.customer,
      courier: this.userDataForm.value.courier,
      enabled: this.userDataForm.value.enabled
    };

    this.userService.createUser(user)
      .subscribe(user => {
        this.loading = false;
        this.router.navigate(['/dashboard/admin/users/']);
      }, error => {
        // TODO parse error (handle 400 bad request)
        this.loading = false;
      });
  }

  private initializeEmptyForm() {
    this.userDataForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(2),
        Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
      fullname: ['', [Validators.required, Validators.minLength(2)]],
      customer: [false],
      courier: [false],
      enabled: [true]
    });
  }

  public showPassword(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  public resetForm() {
    this.initializeEmptyForm();
  }
}
