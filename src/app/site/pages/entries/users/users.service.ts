import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../../../../theme/shared/services/base.service';
import { environment } from './../../../../../environments/environment.prod';
import { ErrorService } from './../../../../app.error';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<UsersModel> {

  public stateUrl = '/pages/entities/users';
  public data: UsersModel;

  constructor(http: HttpClient) {
    super(http, 'users');
  }

  public supports(): Observable<UsersModel[]> {
    return this.http
      .get<UsersModel[]>(`${environment.service_url}/users`)
      .pipe(
        map((resp: UsersModel[]) => resp.filter(c => c.permission >= 5 && c.permission <= 7)),
        catchError(ErrorService.handleError)
      );
  }
}
