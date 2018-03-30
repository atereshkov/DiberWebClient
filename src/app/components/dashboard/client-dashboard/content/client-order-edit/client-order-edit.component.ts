import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../../models/user';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../../../services/order.service';
import {Order} from '../../../../../models/order';
import {UserAuthority} from '../../../../../helper/user.authority';
import {AddressService} from '../../../../../services/address.service';
import {IMultiSelectOption, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import {Address} from '../../../../../models/address';

@Component({
  selector: 'app-client-order-edit',
  templateUrl: './client-order-edit.component.html',
  styleUrls: ['./client-order-edit.component.css']
})
export class ClientOrderEditComponent implements OnInit {

  public order: Order;
  private id: number;
  public orderDataForm: FormGroup;
  private formBuilder: FormBuilder;
  public loading = false;

  optionsFromModel: Address[];
  optionsToModel: Address[];
  addresses: Address[];
  addressFromOptions: IMultiSelectOption[];
  addressToOptions: IMultiSelectOption[];

  // Select field settings configuration
  selectFieldConfig: IMultiSelectSettings = {
    enableSearch: false,
    buttonClasses: 'btn btn-default btn-secondary', // btn-block
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    selectionLimit: 1,
    autoUnselect: true,
    closeOnSelect: true
  };

  public minDate = new Date();

  constructor(private orderService: OrderService, private addressService: AddressService, private router: ActivatedRoute) {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.formBuilder = new FormBuilder();
    this.loadEmptyForm();
  }

  ngOnInit() {
    this.orderService.getOrder(this.id)
      .subscribe((order: Order) => {
        this.order = order;
        this.loadOrderForm();
      });

    this.loadAddresses();
  }

  public updateOrder() {

    const user: User = UserAuthority.getCurrentUser();
    const addressFrom = this.addresses.find(x => x.id == this.orderDataForm.value.fromSelectDropDown);
    const addressTo = this.addresses.find(x => x.id == this.orderDataForm.value.toSelectDropDown);
    const timestamp = (this.orderDataForm.value.datetime.getTime() / 1000).toFixed(0);

    const order: Order = {
      id: this.orderDataForm.value.username,
      date: parseInt(timestamp),
      description: this.orderDataForm.value.description,
      price: this.orderDataForm.value.price,
      status: 'New',
      addressFrom: addressFrom,
      addressTo: addressTo,
      customer: user,
      courier: null
    };

    this.orderService.updateOrder(order)
      .subscribe(response => {

      });
  }

  private loadAddresses() {
    const user: User = UserAuthority.getCurrentUser();
    this.addressService.getAllClientAddresses(user.id)
      .subscribe(
        data => {
          this.optionsFromModel = data.content;
          this.optionsToModel = data.content;
          this.addresses = data.content;
          this.setupSelectOptions();
        },
        err => {
          // TODO handle error
          this.addressFromOptions = [];
          this.addressToOptions = [];
        }
      );
  }

  private setupSelectOptions() {
    this.addressToOptions = this.optionsToModel.map(item =>
      ({
        id: item.id,
        name: item.name
      })
    );
    this.addressFromOptions = this.optionsFromModel.map(item =>
      ({
        id: item.id,
        name: item.name
      })
    );
  }

  private loadEmptyForm() {
    this.orderDataForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.minLength(1),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      fromSelectDropDown: [null, Validators.required],
      toSelectDropDown: [null, Validators.required],
      datetime: [new Date(), Validators.required]
    });
  }

  private loadOrderForm() {
    this.orderDataForm = this.formBuilder.group({
      description: [this.order.description, [Validators.required, Validators.minLength(2)]],
      price: [this.order.price, [Validators.required, Validators.minLength(1),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      fromSelectDropDown: [null, Validators.required],
      toSelectDropDown: [null, Validators.required],
      datetime: [this.order.date, Validators.required]
    });
  }

}
