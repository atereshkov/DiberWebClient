import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../../models/order';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../../../services/order.service';
import {DomSanitizer} from '@angular/platform-browser';
import {OrderStatus} from '../../../../../models/dto/order-status';

@Component({
  selector: 'app-client-order-details',
  templateUrl: './client-order-details.component.html',
  styleUrls: ['./client-order-details.component.css']
})
export class ClientOrderDetailsComponent implements OnInit {

  public order: Order;
  private id: number;
  public loading = false;

  private GOOGLE_MAPS_API_KEY = 'AIzaSyAC3tY0chS8_96_NMhHEvwVZc-xCAvpMXo';

  constructor(private orderService: OrderService, private route: ActivatedRoute,
              private router: Router, private sanitizer: DomSanitizer) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.loadOrderData();
  }

  private loadOrderData() {
    this.loading = true;
    this.orderService.getOrder(this.id)
      .subscribe((order: Order) => {
        this.loading = false;
        this.order = order;
      });
  }

  private acceptOrderRequest(order: Order, status: OrderStatus) {
    this.loading = true;
    this.orderService.acceptOrder(order, status)
      .subscribe((order: Order) => {
        this.loading = false;
        this.loadOrderData();
      });
  }

  public orderIsInProgress() {
    return this.order.status === 'In progress';
  }

  public orderIsDelivered() {
    return this.order.status === 'Delivered';
  }

  public orderHasRequests() {
    // TODO complete this (check order requests)
    return this.order.status === 'New';
  }

  // Public Actions

  public acceptOrderClick() {
    const orderStatus: OrderStatus = new OrderStatus('Completed');
    this.acceptOrderRequest(this.order, orderStatus);
  }

  public editOrderClick() {
    // TODO if order.status != accepted or in progress
    this.router.navigate(['/dashboard/client/orders', this.order.id, 'edit']);
  }

  public addressURL() {
    const toLat = this.order.addressTo.latitude;
    const toLon = this.order.addressTo.longitude;
    const fromLat = this.order.addressFrom.latitude;
    const fromLon = this.order.addressFrom.longitude;

    const url = 'https://www.google.com/maps/embed/v1/directions' +
      '?key=' + this.GOOGLE_MAPS_API_KEY + '&origin=' + toLat + ',' + toLon +
      '&destination=' + fromLat + ',' + fromLon + '&avoid=tolls';

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public currentLocationURL() {
    // TODO Current order location
    // const location = this.order.location;

    const url = 'https://www.google.com/maps/embed/v1/place?key=' + this.GOOGLE_MAPS_API_KEY + '&q=' +
      'Space+Needle,Seattle+WA';

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
