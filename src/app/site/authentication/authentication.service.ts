import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorService } from '../../app.error';
import { environment } from './../../../environments/environment';
import { AuthenticationModel } from './authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public auth: AuthenticationModel;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  public isLogged() {
    const token = this.getToken();
    if (token !== null && token !== undefined && token !== '') {
      return true;
    }
    return false;
  }

  public setToken(token): void {
    sessionStorage.setItem(`${environment.prefix}.token`, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(`${environment.prefix}.token`);
  }

  public getTokenExpirationDate(token: string): Date {
    const decoded = this.jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  public jwtDecode(token: string) {
    return jwt_decode(token);
  }

  public isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  public getLogin(): AuthenticationModel {
    const token = this.getToken();
    if (token) {
      const auth = jwt_decode(token);
      auth.rememberMe = this.getRememberMe() !== '';
      return auth;
    }
  }

  public logIn(): Observable<AuthenticationModel> {
    this.setRememberMe();
    return this.http
      .post<AuthenticationModel>(`${environment.service_url}/sessions`, this.auth)
      .pipe(
        map((resp) => {
          sessionStorage.setItem(`${environment.prefix}.token`, resp.token);
          return this.getLogin();
        }),
        catchError(ErrorService.handleError)
      );
  }

  public getRememberMe(): string {
    const email = localStorage.getItem(`${environment.prefix}.rememberMe`);
    return email ? email : '';
  }

  public setRememberMe(): void {
    if (this.auth.rememberMe) {
      localStorage.setItem(`${environment.prefix}.rememberMe`, this.auth.email);
    } else {
      localStorage.removeItem(`${environment.prefix}.rememberMe`);
    }
  }

  public lock(): Observable<AuthenticationModel> {
    return this.http
      .post<AuthenticationModel>(`${environment.service_url}/lock`, this.auth)
      .pipe(
        catchError(ErrorService.handleError)
      );
  }

  public unlock(): Observable<AuthenticationModel> {
    return this.http
      .post<AuthenticationModel>(`${environment.service_url}/unlock`, this.auth)
      .pipe(
        catchError(ErrorService.handleError)
      );
  }

  public logOut() {
    sessionStorage.removeItem(`${environment.prefix}.token`);
    this.router.navigate(['/auth/signin']);
  }
}
