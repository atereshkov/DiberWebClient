import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../../models/order';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../../../services/order.service';

@Component({
  selector: 'app-client-order-details',
  templateUrl: './client-order-details.component.html',
  styleUrls: ['./client-order-details.component.css']
})
export class ClientOrderDetailsComponent implements OnInit {

  public order: Order;
  private id: number;
  public loading = false;

  constructor(private orderService: OrderService, private router: ActivatedRoute) {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.orderService.getOrder(this.id)
      .subscribe((order: Order) => {
        this.order = order;
        this.loadOrderDetails();
      });
  }

  private loadOrderDetails() {
    // TODO complete UI with this.order
  }

}
