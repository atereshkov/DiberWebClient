import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {keys} from "../constants/storage.keys";
import {api} from "../constants/api";

@Injectable()
export class RegisterService {

  private static REGISTER_URL = api.REGISTER;
  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';

  constructor(private http: Http, private router: Router) {

  }

  register(login: string, password: string) {
    const headers = new Headers({
      'Accept': 'application/json',
      'Authorization': RegisterService.HEADER_AUTHORIZATION_VALUE
    });

    const options = new RequestOptions({headers: headers});

    return this.http.post(RegisterService.REGISTER_URL, options)
      .map((response: Response) => {
        const access_token = response.json().access_token;
        const refresh_token = response.json().refresh_token;
        console.info(response.json());
        if (access_token) {
          localStorage.setItem(keys.TOKEN, JSON.stringify({
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
