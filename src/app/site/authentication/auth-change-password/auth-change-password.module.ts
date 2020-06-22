import { NgModule } from '@angular/core';
import { SharedModule } from './../../../theme/shared/shared.module';
import { AuthChangePasswordRoutingModule } from './auth-change-password-routing.module';
import { AuthChangePasswordComponent } from './auth-change-password.component';

@NgModule({
  imports: [
    SharedModule,
    AuthChangePasswordRoutingModule
  ],
  declarations: [AuthChangePasswordComponent]
})
export class AuthChangePasswordModule { }
