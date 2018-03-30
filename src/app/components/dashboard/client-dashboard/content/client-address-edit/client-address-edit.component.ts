import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../../../../models/address';
import {ActivatedRoute} from '@angular/router';
import {AddressService} from '../../../../../services/address.service';

@Component({
  selector: 'app-client-address-edit',
  templateUrl: './client-address-edit.component.html',
  styleUrls: ['./client-address-edit.component.css']
})
export class ClientAddressEditComponent implements OnInit {

  public address: Address;
  private id: number;
  public addressDataForm: FormGroup;
  private formBuilder: FormBuilder;

  loading = false;

  constructor(private addressService: AddressService, private router: ActivatedRoute) {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.formBuilder = new FormBuilder();
    this.loadEmptyForm();
  }

  ngOnInit() {
    this.addressService.getAddress(this.id)
      .subscribe((address: Address) => {
        this.address = address;
        this.loadAddressForm();
      });
  }

  public updateAddress() {

    const address: Address = {
      id: 0,
      name: this.addressDataForm.value.name,
      country: this.addressDataForm.value.country,
      postalCode: this.addressDataForm.value.postalCode,
      city: this.addressDataForm.value.city,
      region: this.addressDataForm.value.region,
      address: this.addressDataForm.value.address,
      phone: this.addressDataForm.value.phone,
      userId: null
    };

    this.addressService.updateAddress(address)
      .subscribe(response => {

      });
  }

  private loadEmptyForm() {
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

  private loadAddressForm() {
    this.addressDataForm = this.formBuilder.group({
      id: [''],
      name: [this.address.name, [Validators.required, Validators.minLength(2)]],
      country: [this.address.country, [Validators.required, Validators.minLength(2)]],
      city: [this.address.city, [Validators.required, Validators.minLength(2)]],
      region: [this.address.region, [Validators.required, Validators.minLength(2)]],
      address: [this.address.address, [Validators.required, Validators.minLength(2)]],
      postalCode: [this.address.postalCode, [Validators.required, Validators.minLength(2)]],
      phone: [this.address.phone, [Validators.required, Validators.minLength(2)]]
    });
  }

}
