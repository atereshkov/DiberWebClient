import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../../../../../services/address.service';
import {Address} from '../../../../../models/address';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-client-address-details',
  templateUrl: './client-address-details.component.html',
  styleUrls: ['./client-address-details.component.css']
})
export class ClientAddressDetailsComponent implements OnInit {

  public address: Address;
  private id: number;
  public loading = false;

  private GOOGLE_MAPS_API_KEY = 'AIzaSyAC3tY0chS8_96_NMhHEvwVZc-xCAvpMXo';

  constructor(private addressService: AddressService, private route: ActivatedRoute,
              private router: Router, private sanitizer: DomSanitizer) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.loadAddressData();
  }

  private loadAddressData() {
    this.loading = true;
    this.addressService.getAddress(this.id)
      .subscribe((address: Address) => {
        this.loading = false;
        this.address = address;
      });
  }

  // Public Actions

  public editAddressClick() {
    this.router.navigate(['/dashboard/client/addresses', this.address.id, 'edit']);
  }

  public removeAddressClick() {
    // TODO remove
  }

  public addressURL() {
    const lat = this.address.latitude;
    const lon = this.address.longitude;

    const url = 'https://www.google.com/maps/embed/v1/place?key=' + this.GOOGLE_MAPS_API_KEY + '&q=' +
      lat + ',' + lon;

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
