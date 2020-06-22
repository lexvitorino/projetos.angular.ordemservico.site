import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { ErrorService } from '../../../../app.error';
import { FilesModel } from './files.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public create(data: any): Observable<FilesModel> {
    return this.http
      .post<FilesModel>(`${environment.service_url}/files`, data)
      .pipe(
        catchError(ErrorService.handleError)
      );
  }
}
