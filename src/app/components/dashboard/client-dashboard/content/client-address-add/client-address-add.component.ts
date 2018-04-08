import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AddressService} from '../../../../../services/address.service';
import {Address} from '../../../../../models/address';
import {UserAuthority} from '../../../../../helper/user.authority';
import {User} from '../../../../../models/user';

@Component({
  selector: 'app-client-address-add',
  templateUrl: './client-address-add.component.html',
  styleUrls: ['./client-address-add.component.css']
})
export class ClientAddressAddComponent implements OnInit {

  public addressDataForm: FormGroup;
  private formBuilder: FormBuilder;

  loading = false;

  constructor(private addressService: AddressService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
  }

  ngOnInit() {

  }

  public saveAddressData() {
    this.loading = true;
    const address: Address = {
      id: 0,
      name: this.addressDataForm.value.name,
      country: this.addressDataForm.value.country,
      postalCode: this.addressDataForm.value.postalCode,
      city: this.addressDataForm.value.city,
      region: this.addressDataForm.value.region,
      address: this.addressDataForm.value.address,
      phone: this.addressDataForm.value.phone,
      userId: null,
      latitude: null,
      longitude: null
    };

    const user: User = UserAuthority.getCurrentUser();

    this.addressService.createAddress(user.id, address)
      .subscribe(address => {
        this.loading = false;
        this.router.navigate(['/dashboard/client/addresses/']);
      },error => {
        // TODO parse error (handle 400 bad request)
        this.loading = false;
      });
  }

  private initializeEmptyForm() {
    this.addressDataForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      region: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      postalCode: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  public resetForm() {
    this.initializeEmptyForm();
  }
}
