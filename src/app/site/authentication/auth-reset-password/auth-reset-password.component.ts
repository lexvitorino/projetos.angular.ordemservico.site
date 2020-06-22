import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NotificationsService } from './../../../theme/shared/services/notifications.service';
import { AuthenticationValidators } from './../authentication.validators';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {

  dataForm: FormGroup;
  errors: string[];

  constructor(
    public authService: AuthenticationService,
    public formBuilder: FormBuilder,
    public router: Router,
    public notifications: NotificationsService,
    public authValidators: AuthenticationValidators
  ) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      unlock: [true],
    });
  }

  onSubmit() {
    this.errors = this.authValidators.validators(this.dataForm);
    if (this.errors.length > 0) {
      this.notifications.warning('Verifique os erros abaixo:', this.notifications.errors(this.errors));
      return;
    }

    this.authService.auth = Object.assign({}, this.authService.auth, this.dataForm.value);
    this.authService.lock().subscribe(
      (_) => {
        this.notifications.infoCallback('Mi7Dev informa:', 'Verifique seu e-mail!', 3, () => {
          this.router.navigate([`/auth/change-password/${btoa(this.authService.auth.email)}`]);
        });
      },
      (err: any) => {
        this.notifications.error('Login', err.error.error);
      }
    );
  }

}
