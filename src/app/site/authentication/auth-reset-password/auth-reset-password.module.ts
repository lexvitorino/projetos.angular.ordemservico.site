import { NgModule } from '@angular/core';
import { SharedModule } from './../../../theme/shared/shared.module';
import { AuthResetPasswordRoutingModule } from './auth-reset-password-routing.module';
import { AuthResetPasswordComponent } from './auth-reset-password.component';

@NgModule({
  imports: [
    SharedModule,
    AuthResetPasswordRoutingModule
  ],
  declarations: [AuthResetPasswordComponent]
})
export class AuthResetPasswordModule { }
