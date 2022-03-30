import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': `${env.RAPIDARY_KEY}`,
        'x-rapidapi-host': `${env.RAPIDARY_HOST}`,
      },
      setParams: {
        key: `${env.PARAMS_KEY}`,
      },
    });
    return next.handle(req);
  }
}
