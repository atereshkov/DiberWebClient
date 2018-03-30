import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';
import {Address} from "../models/address";

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

  getAddress(id: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(AddressService.ADDRESSES_URL + '/' + id, {
      headers: headers
    });
  }

  getClientAddresses(userId: number, page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get('api/v1/users/' + userId + '/addresses' + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  getAllClientAddresses(userId: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get('api/v1/users/' + userId + '/addresses', {
      headers: headers
    });
  }

  createAddress(userId: number, address: Address): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.post('api/v1/users/' + userId + '/addresses', address, {
      headers: headers
    });
  }

  updateAddress( address: Address): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.put('api/v1/addresses/', address, {
      headers: headers
    });
  }

}
