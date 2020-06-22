import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { UsersFormComponent } from './form/users.form.component';
import { UsersIndexComponent } from './index/users.index.component';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [UsersIndexComponent, UsersFormComponent]
})
export class UsersModule {
}
