import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../../../../app.error';
import { environment } from './../../../../../environments/environment';
import { FileModel } from './file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) {
  }

  public create(data: any): Observable<FileModel> {
    return this.http
      .post<FileModel>(`${environment.service_url}/files`, data)
      .pipe(
        catchError(ErrorService.handleError)
      );
  }
}
