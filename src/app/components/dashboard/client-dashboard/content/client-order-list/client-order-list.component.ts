import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SortService} from '../../../../../services/sort.service';
import {OrderService} from '../../../../../services/order.service';
import {Order} from '../../../../../models/order';
import {User} from "../../../../../models/user";
import {UserAuthority} from "../../../../../helper/user.authority";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-order-list',
  templateUrl: './client-order-list.component.html',
  styleUrls: ['./client-order-list.component.css']
})
export class ClientOrderListComponent implements OnInit {

  orders: Order[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onOrdersLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private orderService: OrderService, private sortService: SortService, private router: Router) {
    this.orders = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    const user: User = UserAuthority.getCurrentUser();
    this.orderService.getClientOrders(user.id, this.page - 1, this.limit)
      .subscribe(
        data => {
          this.orders = data.content;
          this.total = data.totalElements;
          this.loading = false;
          this.onOrdersLoaded.emit(data.totalElements);
          this.sortService.sort(this.orders, {sortColumn: 'id', sortDirection: 'asc'});
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
    this.orders = this.sortService.sort(this.orders, $event);
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + error.message ? error.message : error.toString());
  }

  // Public Actions

  public newOrderClick() {
    this.router.navigate(['/dashboard/client/orders/new']);
  }

  public editOrder(order: Order) {
    // if order.status != accepter or in progress
    this.router.navigate(['/dashboard/client/orders', order.id, 'edit']);
  }


}

