import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ErrorService } from '../../../app.error';

export abstract class BaseService<T> {

  constructor(
    public http: HttpClient,
    public pathModel: string
  ) {
  }

  isSelected(data: any, success: () => any = null, error: () => any = null): void {
    if (!data) {
      if (error) {
        error();
      }
    } else if (success) {
      success();
    }
  }

  public get(): Observable<T[]> {
    return this.http
      .get<T[]>(`${environment.service_url}/${this.pathModel}`)
      .pipe(catchError(ErrorService.handleError));
  }

  public getById(id: any): Observable<T> {
    return this.http
      .get<T>(`${environment.service_url}/${this.pathModel}/${id}`)
      .pipe(catchError(ErrorService.handleError));
  }

  public add(data: T): Observable<T> {
    return this.http
      .post<T>(`${environment.service_url}/${this.pathModel}`, data)
      .pipe(catchError(ErrorService.handleError));
  }

  public update(data: T): Observable<T> {
    return this.http
      .put<T>(`${environment.service_url}/${this.pathModel}`, data)
      .pipe(catchError(ErrorService.handleError));
  }

  public delete(id: any): Observable<T> {
    return this.http
      .delete<T>(`${environment.service_url}/${this.pathModel}/${id}`)
      .pipe(catchError(ErrorService.handleError));
  }

  public save(data: T, edit: boolean): Observable<T> {
    if (edit) {
      return this.update(data);
    } else {
      return this.add(data);
    }
  }
}
