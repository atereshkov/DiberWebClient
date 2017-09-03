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

  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.orderService.getOrders()
      .subscribe(
        orders => {
          this.orders = orders;
        },
        err => this.logError(err)
      );
  }

  ordersCount(): number {
    return this.orders.length || 0
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + +error.message ? error.message : error.toString());
  }

}
