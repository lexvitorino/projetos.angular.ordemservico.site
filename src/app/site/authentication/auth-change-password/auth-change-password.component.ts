import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NotificationsService } from './../../../theme/shared/services/notifications.service';
import { AuthenticationValidators } from './../authentication.validators';


@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  dataForm: FormGroup;
  errors: string[];

  constructor(
    public authService: AuthenticationService,
    public formBuilder: FormBuilder,
    public router: Router,
    public notifications: NotificationsService,
    public authValidators: AuthenticationValidators,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const email = atob(params['email']);
      this.dataForm = this.formBuilder.group({
        email: [email, [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        newpassword: ['', [Validators.required, Validators.minLength(6)]],
        repassword: ['', [Validators.required, Validators.minLength(6)]]
      });
    });
  }

  onSubmit() {
    this.errors = this.authValidators.validators(this.dataForm);
    if (this.errors.length > 0) {
      this.notifications.warning('Verifique os erros abaixo:', this.notifications.errors(this.errors));
      return;
    }

    this.authService.auth = Object.assign({}, this.authService.auth, this.dataForm.value);
    this.authService.unlock().subscribe(
      (_) => {
        this.notifications.infoCallback('Mi7Dev informa:', 'Tudo pronto... Faça login com a nova senha!', 3, () => {
          this.router.navigate([`/auth/signin`]);
        });
      },
      (err: any) => {
        this.notifications.error('Login', err.error.error);
      }
    );
  }

}
