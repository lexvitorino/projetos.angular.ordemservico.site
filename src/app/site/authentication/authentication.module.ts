import { NgModule } from '@angular/core';
import { SharedModule } from './../../theme/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: []
})
export class AuthenticationModule { }
