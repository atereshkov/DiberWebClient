import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {keys} from '../constants/storage.keys';
import {api} from '../constants/api';
import {Register} from '../models/register';

@Injectable()
export class RegisterService {

  private static REGISTER_URL = api.REGISTER;
  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';

  constructor(private http: HttpClient) {

  }

  register(user: Register) {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': RegisterService.HEADER_AUTHORIZATION_VALUE
    });
    const options = new RequestOptions({headers: headers});

    const userData = JSON.stringify(user);
    return this.http.post(RegisterService.REGISTER_URL, userData, options)
      .map(RegisterService.handleUserInfo)
      .catch(RegisterService.handleError);
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
