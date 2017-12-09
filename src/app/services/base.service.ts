import {Injectable} from '@angular/core';
import {keys} from '../constants/storage.keys';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export abstract class BaseService {

  private static HEADER_AUTHORIZATION_VALUE = 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==';
  private static CLIENT_ID = 'client_id';
  private static CLIENT_SECRET = 'client_secret';
  private static CLIENT_SECRET_VALUE = '123456';
  private static CLIENT_ID_VALUE = 'clientapp';
  private static GRANT_TYPE = 'grant_type';
  private static GRANT_TYPE_VALUE = 'password';

  constructor() {

  }

  protected getBearerHeaders(): HttpHeaders {
    const token = JSON.parse(localStorage.getItem(keys.TOKEN)).access_token;
    const headers = {
      'Authorization': 'Bearer' + token
    };
    return new HttpHeaders(headers);
  }

  protected getBasicHeaders(): HttpHeaders {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': BaseService.HEADER_AUTHORIZATION_VALUE
    };
    return new HttpHeaders(headers);
  }

  protected getRegisterHeaders(): HttpHeaders {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': BaseService.HEADER_AUTHORIZATION_VALUE
    };
    return new HttpHeaders(headers);
  }

  protected getBasicParams(login: string, password: string): HttpParams {
    return new HttpParams()
      .set(BaseService.CLIENT_ID, BaseService.CLIENT_ID_VALUE)
      .set(BaseService.GRANT_TYPE, BaseService.GRANT_TYPE_VALUE)
      .set(BaseService.CLIENT_SECRET, BaseService.CLIENT_SECRET_VALUE)
      .set('username', login)
      .set('password', password);
  }

}
