import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EntriesGuard implements CanActivateChild {
  constructor(
    private authService: AuthenticationService,
    private router: Router) {
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | boolean {
    let permission = 0;
    if (route.data.permission) {
      permission = route.data.permission;
    }
    return this.accessIsValid(permission);
  }

  private accessIsValid(permission) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['pages/dasboard']);
    } else if (permission > 0) {
      return permission <= this.authService.getLogin().permission;
    }
    return true;
  }
}
