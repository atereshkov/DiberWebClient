import {RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {keys} from "../constants/storage.keys";

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

  protected getBearerRequestOptions(): RequestOptions {
    let token = JSON.parse(localStorage.getItem(keys.TOKEN)).access_token;
    const headers = new Headers({
      'Authorization': 'Bearer' + token
    });
    return new RequestOptions({headers: headers});
  }

  protected getBasicRequestOptions(): RequestOptions {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': BaseService.HEADER_AUTHORIZATION_VALUE
    });

    return new RequestOptions({headers: headers});
  }

  protected getBasicParams(login: string, password: string): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    params.set(BaseService.CLIENT_ID, BaseService.CLIENT_ID_VALUE);
    params.set(BaseService.GRANT_TYPE, BaseService.GRANT_TYPE_VALUE);
    params.set(BaseService.CLIENT_SECRET, BaseService.CLIENT_SECRET_VALUE);
    params.set('username', login);
    params.set('password', password);

    return params;
  }

}
