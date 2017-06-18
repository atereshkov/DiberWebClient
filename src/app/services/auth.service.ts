import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  public token: String;
  private static AUTH = 'https://pacific-forest-76418.herokuapp.com/oauth/token';

  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';
  private static CLIENT_ID = 'client_id';
  private static CLIENT_ID_VALUE = 'clientapp';
  private static GRANT_TYPE = 'grant_type';
  private static GRANT_TYPE_VALUE = 'password';

  constructor(private http: Http) {

  }

  login(login: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json',
                                  'Authorization': AuthService.HEADER_AUTHORIZATION_VALUE });

    let params: URLSearchParams = new URLSearchParams();
    params.set(AuthService.CLIENT_ID, AuthService.CLIENT_ID_VALUE);
    params.set(AuthService.GRANT_TYPE, AuthService.GRANT_TYPE_VALUE);
    params.set('username', login);
    params.set('password', password);

    const options = new RequestOptions({ headers: headers, params: params });

    return this.http.post(AuthService.AUTH, options)
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: login, token: token, password: password }));
          return true;
        } else {
          return false;
        }
      })
      .catch(AuthService.handleError);
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
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
