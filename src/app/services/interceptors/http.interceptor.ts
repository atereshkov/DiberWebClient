import {Injectable} from "@angular/core";
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";
import {api} from "../../constants/api";
import {keys} from "../../constants/storage.keys";

@Injectable()
export class ExtendedHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private updateUrl(req: string) {
    return api.END_POINT + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    //options.headers.append('Content-Type', 'application/json');

    return options;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options)
      .catch((error: Response) => {
        if (error.status === 401 || error.status === 403) {
          console.info('Got 401 or 403 status code. Navigate to /login page.');
          localStorage.removeItem(keys.USER);
          localStorage.removeItem(keys.TOKEN);
          this.router.navigate(['/signin']);
          // TODO use refresh token
        }
        return Observable.throw(error);
      });
  }

}
