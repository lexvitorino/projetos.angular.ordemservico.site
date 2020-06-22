import { NgModule } from '@angular/core';
import { SharedModule } from '../../../theme/shared/shared.module';
import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';


@NgModule({
  imports: [
    SharedModule,
    AuthSigninRoutingModule
  ],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }
