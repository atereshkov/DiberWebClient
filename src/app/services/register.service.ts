import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class RegisterService {

  private static REGISTER = 'https://pacific-forest-76418.herokuapp.com/auth/register';
  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';

  constructor(private http: Http, private router: Router) {

  }

  register(login: string, password: string) {
    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': RegisterService.HEADER_AUTHORIZATION_VALUE
    });

    let params: URLSearchParams = new URLSearchParams();
    //params.set(AuthService.CLIENT_ID, AuthService.CLIENT_ID_VALUE);
    //params.set(AuthService.GRANT_TYPE, AuthService.GRANT_TYPE_VALUE);
    //params.set(AuthService.CLIENT_SECRET, AuthService.CLIENT_SECRET_VALUE);
    //params.set('username', login);
    //params.set('password', password);

    const options = new RequestOptions({headers: headers});

    return this.http.post(RegisterService.REGISTER, params, options)
      .map((response: Response) => {
        const access_token = response.json().access_token;
        const refresh_token = response.json().refresh_token;
        console.info(response.json());
        if (access_token) {
          localStorage.setItem('currentUser', JSON.stringify({
            username: login,
            access_token: access_token,
            refresh_token: refresh_token,
            password: password
          }));
          return true;
        } else {
          return false;
        }
      })
      .catch(RegisterService.handleError);
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
