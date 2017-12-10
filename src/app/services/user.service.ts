import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class UserService extends BaseService {

  private static USERS_URL = api.USERS_ALL;

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(UserService.USERS_URL + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

}
