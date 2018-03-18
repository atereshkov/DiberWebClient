import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Address} from '../../../../../models/address';
import {SortService} from '../../../../../services/sort.service';
import {AddressService} from '../../../../../services/address.service';
import {UserAuthority} from '../../../../../helper/user.authority';
import {User} from '../../../../../models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-address-list',
  templateUrl: './client-address-list.component.html',
  styleUrls: ['./client-address-list.component.css']
})
export class ClientAddressListComponent implements OnInit {

  addresses: Address[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onAddressesLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private addressService: AddressService, private sortService: SortService, private router: Router) {
    this.addresses = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    const user: User = UserAuthority.getCurrentUser();
    this.addressService.getClientAddresses(user.id, this.page - 1, this.limit)
      .subscribe(
        data => {
          this.addresses = data.content;
          this.total = data.totalElements;
          this.loading = false;
          this.onAddressesLoaded.emit(data.totalElements);
          this.sortService.sort(this.addresses, {sortColumn: 'id', sortDirection: 'asc'});
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

  // Pagination

  goToPage(n: number) {
    this.page = n;
    this.loadData();
  }

  onNext() {
    this.page++;
    this.loadData();
  }

  onPrev() {
    this.page--;
    this.loadData();
  }

  // Sorting

  onSorted($event) {
    this.addresses = this.sortService.sort(this.addresses, $event);
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + error.message ? error.message : error.toString());
  }

  // Public Actions

  public newAddressClick() {
    this.router.navigate(['/dashboard/client/addresses/new']);
  }

}
