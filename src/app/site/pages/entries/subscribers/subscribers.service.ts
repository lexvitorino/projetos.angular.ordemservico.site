import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorService } from '../../../../app.error';
import { environment } from './../../../../../environments/environment';
import { SubscriberModel } from './subscribers.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  public data: SubscriberModel;

  constructor(
    private http: HttpClient
  ) {
  }

  public create(): Observable<SubscriberModel> {
    return this.http
      .post<SubscriberModel>(`${environment.service_url}/subscribers`, this.data)
      .pipe(
        map((resp: SubscriberModel) => this.data = resp),
        catchError(ErrorService.handleError)
      );
  }
}
