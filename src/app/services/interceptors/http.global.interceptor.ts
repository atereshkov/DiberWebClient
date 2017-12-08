import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {api} from '../../constants/api';

@Injectable()
export class HttpGlobalInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newParams = request.params;
    const newHeaders = request.headers;
    const newUrl = api.END_POINT + request.url;
    request = request.clone({ headers: newHeaders, params: newParams, url: newUrl });
    return next.handle(request);
  }
}
