import {Http, Response, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {keys} from "../constants/storage.keys";
import {api} from "../constants/api";

@Injectable()
export class AuthService {

  private static AUTH = api.END_POINT + api.AUTH;
  private static USER_INFO = api.END_POINT + api.USER_INFO;

  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';
  private static CLIENT_ID = 'client_id';
  private static CLIENT_SECRET = 'client_secret';
  private static CLIENT_SECRET_VALUE = '123456';
  private static CLIENT_ID_VALUE = 'clientapp';
  private static GRANT_TYPE = 'grant_type';
  private static GRANT_TYPE_VALUE = 'password';

  constructor(private http: Http, private router: Router) {

  }

  login(login: string, password: string): Observable<boolean> {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': AuthService.HEADER_AUTHORIZATION_VALUE
    });

    let params: URLSearchParams = new URLSearchParams();
    params.set(AuthService.CLIENT_ID, AuthService.CLIENT_ID_VALUE);
    params.set(AuthService.GRANT_TYPE, AuthService.GRANT_TYPE_VALUE);
    params.set(AuthService.CLIENT_SECRET, AuthService.CLIENT_SECRET_VALUE);
    params.set('username', login);
    params.set('password', password);

    const options = new RequestOptions({headers: headers});

    return this.http.post(AuthService.AUTH, params, options)
      .map(AuthService.handleToken)
      .catch(AuthService.handleError);
  }

  getUserInfo(): Observable<boolean> {
    let token = JSON.parse(localStorage.getItem(keys.TOKEN)).access_token;
    const headers = new Headers({
      'Authorization': 'Bearer' + token
    });
    const options = new RequestOptions({headers: headers});

    return this.http.get(AuthService.USER_INFO, options)
      .map(AuthService.handleUserInfo)
      .catch(AuthService.handleError);
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem(keys.USER);
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
    let user = response.json();
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
