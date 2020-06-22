import { Injectable } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { tap, take } from 'rxjs/operators';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private toastr: ToastrService
  ) {
  }

  info(title: string, message: string) {
    this.toastr.info(message, title);
  }

  infoCallback(title: string, message: string, seconds: number, callback?: () => any) {
    this.toastr.info(message, title, { timeOut: (seconds * 1000) })
      .onHidden
      .pipe(take(1))
      .subscribe(() => callback());
  }

  success(title: string, message: string) {
    this.toastr.success(message, title);
  }

  successCallback(title: string, message: string, seconds: number, callback?: () => any) {
    this.toastr.success(message, title, { timeOut: (seconds * 1000) })
      .onHidden
      .pipe(take(1))
      .subscribe(() => callback());
  }

  warning(title: string, message: string) {
    this.toastr.warning(message, title);
  }

  error(title: string, message: string) {
    this.toastr.error(message, title);
  }

  errors(values: string[]): string {
    let html = '';
    values.forEach(e => {
      html += `<li><small>${e}</small></li>`;
    });
    return `${html}`;
  }

}
