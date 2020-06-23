import { ErrorService } from './../../../../app.error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../../theme/shared/services/base.service';
import { CustomersModel } from './customers.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends BaseService<CustomersModel> {

  public stateUrl = '/pages/entities/customers';
  public data: CustomersModel;

  constructor(http: HttpClient) {
    super(http, 'customers');
  }

  public getCep(cep: string): Observable<any> {
    return this.http
      .get<any>(`http://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        catchError(ErrorService.handleError)
      );
  }
}
