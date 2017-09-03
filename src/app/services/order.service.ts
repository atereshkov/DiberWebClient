import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Order} from "../models/order";

@Injectable()
export class OrderService {

  private static ORDERS = 'https://pacific-forest-76418.herokuapp.com/api/v1/orders';

  constructor(private http: Http, private router: Router) {

  }

  getOrders(): Observable<Order[]> {
    let token = JSON.parse(localStorage.getItem('currentUser')).access_token;
    const headers = new Headers({
      'Authorization': 'Bearer' + token
    });
    const options = new RequestOptions({headers: headers});

    return this.http.get(OrderService.ORDERS, options)
      .map((response: Response) => {
        if (response.status != 200) {
          throw new Error('Error when getting orders. Status: ' + response.status);
        } else {
          return response.json();
        }
      })
  }


}
