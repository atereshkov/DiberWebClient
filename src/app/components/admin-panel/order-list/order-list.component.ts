import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Order} from "../../../models/order";
import {OrderService} from "../../../services/order.service";

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
  limit = 7;

  @Output() onOrdersLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.orderService.getOrders(this.page - 1, this.limit)
      .subscribe(
        orders => {
          this.orders = orders.content;
          this.total = orders.totalElements;
          this.loading = false;
          this.onOrdersLoaded.emit(orders.totalElements);
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

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

  // TODO Logger
  logError(error) {
    console.error('Error: ' + +error.message ? error.message : error.toString());
  }

}
