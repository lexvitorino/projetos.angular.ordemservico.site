import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../authentication.model';
import { AuthenticationService } from '../authentication.service';
import { NotificationsService } from './../../../theme/shared/services/notifications.service';
import { AuthenticationValidators } from './../authentication.validators';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

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
    const rememberMe = this.authService.getRememberMe();
    this.dataForm = this.formBuilder.group({
      email: [rememberMe, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [rememberMe !== '']
    });
  }

  onSubmit() {
    this.errors = this.authValidators.validators(this.dataForm);
    if (this.errors.length > 0) {
      this.notifications.warning('Verifique os erros abaixo:', this.notifications.errors(this.errors));
      return;
    }

    this.authService.auth = Object.assign({}, this.authService.auth, this.dataForm.value);
    this.authService.logIn().subscribe(
      (resp: AuthenticationModel) => {
        if (this.authService.isLogged()) {
          this.notifications.successCallback(`Bem vindo, ${resp.name}`, 'Você será redirecionado ao dashboard', 3, () => {
            this.router.navigate(['pages/dashboard']);
          });
        }
      },
      (error: any) => {
        this.notifications.error('Login', error);
      }
    );
  }

  onRememberMe() {
    this.authService.auth = Object.assign({}, this.authService.auth, this.dataForm.value);
    this.authService.setRememberMe();
  }

}
