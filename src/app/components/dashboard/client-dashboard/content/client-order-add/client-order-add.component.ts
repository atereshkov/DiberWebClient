import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../../../services/order.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../../../../../models/order';
import {User} from '../../../../../models/user';
import {UserAuthority} from '../../../../../helper/user.authority';
import {IMultiSelectOption, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import {Address} from '../../../../../models/address';
import {AddressService} from '../../../../../services/address.service';

@Component({
  selector: 'app-client-order-add',
  templateUrl: './client-order-add.component.html',
  styleUrls: ['./client-order-add.component.css']
})
export class ClientOrderAddComponent implements OnInit {

  public orderDataForm: FormGroup;
  private formBuilder: FormBuilder;
  loading = false;

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

  constructor(private orderService: OrderService, private addressService: AddressService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
  }

  ngOnInit() {
    this.loadAddresses();
  }

  public saveOrderData() {
    this.loading = true;

    const user: User = UserAuthority.getCurrentUser();
    const addressFrom = this.addresses.find(x => x.id == this.orderDataForm.value.fromSelectDropDown);
    const addressTo = this.addresses.find(x => x.id == this.orderDataForm.value.toSelectDropDown);
    const date = this.orderDataForm.value.date + this.orderDataForm.value.time;

    console.log('Time: ' + this.orderDataForm.value.datetime);

    const order: Order = {
      id: this.orderDataForm.value.username,
      date: date,
      description: this.orderDataForm.value.description,
      price: this.orderDataForm.value.price,
      status: 'New',
      addressFrom: addressFrom,
      addressTo: addressTo,
      customer: user,
      courier: null
    };

    console.log(order);
    /*
    this.orderService.createOrder(user.id, order)
      .subscribe(order => {
        this.loading = false;
        this.router.navigate(['/dashboard/client/orders/']);
      }, error => {
        // TODO parse error (handle 400 bad request)
        this.loading = false;
      });
      */
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

  private initializeEmptyForm() {
    this.orderDataForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.minLength(1),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      fromSelectDropDown: [null, Validators.required],
      toSelectDropDown: [null, Validators.required],
      datetime: [new Date(), Validators.required]
    });
  }

  public resetForm() {
    this.initializeEmptyForm();
  }
}
