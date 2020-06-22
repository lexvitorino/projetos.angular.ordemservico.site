import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './form/users.form.component';
import { UsersIndexComponent } from './index/users.index.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UsersIndexComponent,
  },
  {
    path: 'create',
    component: UsersFormComponent,
  },

  {
    path: 'edit/:id',
    component: UsersFormComponent,
  },
  {
    path: 'detail/:id',
    component: UsersFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
