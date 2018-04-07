import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../../models/order';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../../../services/order.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-client-order-details',
  templateUrl: './client-order-details.component.html',
  styleUrls: ['./client-order-details.component.css']
})
export class ClientOrderDetailsComponent implements OnInit {

  public order: Order;
  private id: number;
  public loading = false;

  constructor(private orderService: OrderService, private router: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.loading = true;
    this.orderService.getOrder(this.id)
      .subscribe((order: Order) => {
        this.loading = false;
        this.order = order;
      });
  }

  public addressURL() {
    const toLat = this.order.addressTo.latitude;
    const toLon = this.order.addressTo.longitude;
    const fromLat = this.order.addressFrom.latitude;
    const fromLon = this.order.addressFrom.longitude;

    const url = 'https://www.google.com/maps/embed/v1/directions' +
      '?key=AIzaSyAC3tY0chS8_96_NMhHEvwVZc-xCAvpMXo&origin=' + toLat + ',' + toLon +
      '&destination=' + fromLat + ',' + fromLon + '&avoid=tolls';

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
