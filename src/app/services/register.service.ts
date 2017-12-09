import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {api} from '../constants/api';
import {Register} from '../models/register';
import {BaseService} from "./base.service";

@Injectable()
export class RegisterService extends BaseService {

  private static REGISTER_URL = api.REGISTER;

  constructor(private http: HttpClient) {
    super();
  }

  register(user: Register) {
    const headers = this.getRegisterHeaders();
    const userData = JSON.stringify(user);
    return this.http.post(RegisterService.REGISTER_URL, userData, { headers: headers });
  }

  /*
  private static handleUserInfo(response: Response): boolean {
    console.info(response.json());
    const user = response.json();
    if (user) {
      localStorage.setItem(keys.USER, JSON.stringify(user));
      return true;
    }
    return false;
  }
  */

}
