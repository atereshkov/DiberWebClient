import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../../services/order.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../../../../../models/order';
import {User} from '../../../../../models/user';
import {UserAuthority} from '../../../../../helper/user.authority';
import {IMyDpOptions, MyDatePickerModule} from 'mydatepicker';

@Component({
  selector: 'app-client-order-add',
  templateUrl: './client-order-add.component.html',
  styleUrls: ['./client-order-add.component.css']
})
export class ClientOrderAddComponent implements OnInit {

  public orderDataForm: FormGroup;
  private formBuilder: FormBuilder;

  loading = false;

  public datePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true,
    disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1}
  };

  constructor(private orderService: OrderService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
  }

  ngOnInit() {

  }

  public saveOrderData() {
    this.loading = true;

    const user: User = UserAuthority.getCurrentUser();

    const order: Order = {
      id: this.orderDataForm.value.username,
      date: this.orderDataForm.value.date,
      description: this.orderDataForm.value.description,
      price: this.orderDataForm.value.price,
      status: 'New',
      addressFrom: this.orderDataForm.value.addressFrom,
      addressTo: this.orderDataForm.value.addressTo,
      customer: user,
      courier: null
    };

    this.orderService.createOrder(user.id, order)
      .subscribe(order => {
        this.loading = false;
        this.router.navigate(['/dashboard/client/orders/']);
      }, error => {
        // TODO parse error (handle 400 bad request)
        this.loading = false;
      });
  }

  private initializeEmptyForm() {
    this.orderDataForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.minLength(1),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      date: [null, Validators.required],
      customer: [false],
      courier: [false],
      enabled: [true]
    });
  }

  public resetForm() {
    this.initializeEmptyForm();
  }
}
