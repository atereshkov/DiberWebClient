import {Component, OnInit} from "@angular/core";
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
  limit = 6;

  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.orderService.getOrders(this.page - 1, this.limit)
      .subscribe(
        orders => {
          this.orders = orders;
          this.total = orders.length;
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
