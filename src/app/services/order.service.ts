import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class OrderService extends BaseService {

  private static ORDERS_URL = api.ORDERS_ALL;

  constructor(private http: HttpClient) {
    super();
  }

  getOrders(page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(OrderService.ORDERS_URL + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

}
