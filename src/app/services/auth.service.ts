import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {keys} from '../constants/storage.keys';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class AuthService extends BaseService {

  private static AUTH_URL = api.AUTH;
  private static USER_INFO_URL = api.USER_INFO;

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  login(login: string, password: string): Observable<boolean> {
    const basicParams = this.getBasicParams(login, password);
    const bearerRequestOptions = this.getBasicRequestOptions;
    return this.http.post(AuthService.AUTH_URL, basicParams, bearerRequestOptions())
      .map(AuthService.handleToken)
      .catch(AuthService.handleError);
  }

  getUserInfo(): Observable<boolean> {
    const bearerRequestOptions = this.getBearerRequestOptions;
    return this.http.get(AuthService.USER_INFO_URL, bearerRequestOptions())
      .map(AuthService.handleUserInfo)
      .catch(AuthService.handleError);
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(keys.USER) && !!localStorage.getItem(keys.TOKEN);
  }

  logout(): void {
    localStorage.removeItem(keys.USER);
    localStorage.removeItem(keys.TOKEN);
    this.router.navigate(['/']);
  }

  private static handleToken(response: Response): boolean {
    const access_token = response.json().access_token;
    const refresh_token = response.json().refresh_token;
    if (access_token && refresh_token) {
      localStorage.setItem(keys.TOKEN, JSON.stringify({
        access_token: access_token,
        refresh_token: refresh_token
      }));
      return true;
    } else {
      return false;
    }
  }

  private static handleUserInfo(response: Response): boolean {
    console.info(response.json());
    const user = response.json();
    if (user) {
      localStorage.setItem(keys.USER, JSON.stringify(user));
      return true;
    }
    return false;
  }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `Error status: ${error.status} - error status text: ${error.statusText} || ''} Error: ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
