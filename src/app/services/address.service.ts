import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class AddressService extends BaseService {

  private static ADDRESSES_URL = api.ADDRESSES_ALL;

  constructor(private http: HttpClient) {
    super();
  }

  getAddresses(page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(AddressService.ADDRESSES_URL + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  getClientAddresses(userId: number, page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get('api/v1/users/' + userId + '/addresses' + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

}
