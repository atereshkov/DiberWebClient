import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from '../../../../models/order';
import {OrderService} from '../../../../services/order.service';
import {SortService} from '../../../../services/sort.service';

@Component({
  selector: 'app-order-list',
  templateUrl: 'order-list.component.html',
  styleUrls: ['order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onOrdersLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private orderService: OrderService, private sortService: SortService) {
    this.orders = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    console.log('KEK LOAD DATA');
    this.loading = true;
    this.orderService.getOrders(this.page - 1, this.limit)
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

}
