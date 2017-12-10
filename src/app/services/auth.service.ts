import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {api} from '../constants/api';
import {BaseService} from './base.service';
import {keys} from '../constants/storage.keys';

@Injectable()
export class AuthService extends BaseService {

  private static AUTH_URL = api.AUTH;
  private static USER_INFO_URL = api.USER_INFO;

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  login(login: string, password: string): Observable<any> {
    const params = this.getBasicParams(login, password);
    const headers = this.getBasicHeaders();
    return this.http.post(AuthService.AUTH_URL, null, {
      headers: headers, params: params
    });
  }

  getUserInfo(): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(AuthService.USER_INFO_URL, {
      headers: headers
    });
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(keys.USER) && !!localStorage.getItem(keys.TOKEN);
  }

  logout(): void {
    localStorage.removeItem(keys.USER);
    localStorage.removeItem(keys.TOKEN);
    this.router.navigate(['/']);
  }

}
