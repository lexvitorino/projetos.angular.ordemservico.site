import {
  HttpHandler,
  HttpHeaderResponse,
  HttpHeaders,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './site/authentication/authentication.service';
import { NotificationsService } from './theme/shared/services/notifications.service';

declare var $: any;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    public injector: Injector,
    public router: Router,
    public authService: AuthenticationService,
    public notificationService: NotificationsService
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<| HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>> {

    const authService = this.injector.get(AuthenticationService);

    const bearer = 'Bearer ' + authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': bearer
    });

    let cloneReq: any = null;

    let hasToken = true;
    const ignoreURLs = ['sessions', 'viacep.com.br'];
    ignoreURLs.findIndex(c => {
      if (req.url.indexOf(c) >= 0) {
        hasToken = false;
        return;
      }
    });

    cloneReq = hasToken ? req.clone({ headers }) : req.clone();

    if (authService.isLogged()) {
      if (authService.isTokenExpired()) {
        $('#re-login-dialog').modal('show');
        return EMPTY;
      }

      return next.handle(cloneReq).pipe(catchError(err => {
        if (err.status === 401) {
          this.authService.logOut();
          this.router.navigate(['auth/sigin']);
        } else if (err.status === 400) {
          this.notificationService.error('MI7Dev informa:', err.error.error);
        }
        return throwError(err);
      }));
    } else {
      return next.handle(req).pipe(catchError(err => {
        return throwError(err);
      }));
    }
  }
}
