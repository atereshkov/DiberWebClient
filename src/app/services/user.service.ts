import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {api} from "../constants/api";
import {BaseService} from "./base.service";

@Injectable()
export class UserService extends BaseService {

  private static USERS_URL = api.USERS_ALL;

  constructor(private http: Http) {
    super();
  }

  getUsers(page: number, size: number): Observable<any> {
    let bearerRequestOptions = this.getBearerRequestOptions();
    return this.http.get(UserService.USERS_URL + '?' + 'page=' + page + '&' + 'size=' + size, bearerRequestOptions)
      .map((response: Response) => {
        if (response.status != 200) {
          throw new Error('Error when getting orders. Status: ' + response.status);
        } else {
          return response.json();
        }
      });
  }

}
