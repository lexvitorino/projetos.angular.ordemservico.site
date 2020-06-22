import { NgModule } from '@angular/core';
import { SharedModule } from './../../../theme/shared/shared.module';
import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';

@NgModule({
  imports: [
    SharedModule,
    AuthSignupRoutingModule
  ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule { }
