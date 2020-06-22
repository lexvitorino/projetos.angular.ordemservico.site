import { NotificationsService } from './../../theme/shared/services/notifications.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    public notifications: NotificationsService,
    private router: Router) {
  }

  canActivate(
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
      this.notifications.infoCallback(
        'MI7Dev informa:',
        '<small>Seu login foi revogado e será necessário fazer login novamente!</small>',
        5,
        () => {
          this.router.navigate(['auth/signin']);
        });
    } else if (permission > 0) {
      return permission <= this.authService.getLogin().permission;
    }
    return true;
  }
}
