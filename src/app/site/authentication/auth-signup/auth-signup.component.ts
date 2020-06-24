import { SubscriberService } from './../../pages/entries/subscribers/subscribers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from './../../../theme/shared/services/notifications.service';
import { AuthenticationValidators } from './../authentication.validators';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  dataForm: FormGroup;
  errors: string[];

  constructor(
    public subsService: SubscriberService,
    public formBuilder: FormBuilder,
    public router: Router,
    public notifications: NotificationsService,
    public authValidators: AuthenticationValidators
  ) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.errors = this.authValidators.validators(this.dataForm);
    if (this.errors.length > 0) {
      this.notifications.warning('Verifique os erros abaixo:', this.notifications.errors(this.errors));
      return;
    }

    this.subsService.data = Object.assign({}, this.subsService.data, this.dataForm.value);
    this.subsService.create().subscribe(
      (_) => {
        this.notifications.infoCallback('Mi7Dev informa:', 'Tudo pronto... Faça login e seja bem vindo!', 3, () => {
          this.router.navigate([`/auth/signin`]);
        });
      },
      (err: any) => {
        this.notifications.error('Login', err.error.error);
      }
    );
  }

}
