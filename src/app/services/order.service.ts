import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class OrderService extends BaseService {

  private static ORDERS_URL = api.ORDERS_ALL;

  constructor(private http: Http) {
    super();
  }

  getOrders(page: number, size: number): Observable<any> {
    const bearerRequestOptions = this.getBearerRequestOptions();
    return this.http.get(OrderService.ORDERS_URL + '?' + 'page=' + page + '&' + 'size=' + size, bearerRequestOptions)
      .map((response: Response) => {
        if (response.status !== 200) {
          throw new Error('Error when getting orders. Status: ' + response.status);
        } else {
          return response.json();
        }
      });
  }

}
