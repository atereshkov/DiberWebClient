import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {keys} from "../constants/storage.keys";
import {api} from "../constants/api";

@Injectable()
export class OrderService {

  private static ORDERS = api.END_POINT + api.ORDERS_ALL;

  constructor(private http: Http, private router: Router) {

  }

  getOrders(page: number, size: number): Observable<any> {
    let token = JSON.parse(localStorage.getItem(keys.TOKEN)).access_token;
    const headers = new Headers({
      'Authorization': 'Bearer' + token
    });
    const options = new RequestOptions({headers: headers});

    return this.http.get(OrderService.ORDERS + '?' + 'page=' + page + '&' + 'size=' + size, options)
      .map((response: Response) => {
        if (response.status != 200) {
          throw new Error('Error when getting orders. Status: ' + response.status);
        } else {
          return response.json();
        }
      })
  }


}
