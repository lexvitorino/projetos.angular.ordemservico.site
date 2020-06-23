import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersIndexComponent } from './index/customers-index.component';
import { CustomersFormComponent } from './form/customers-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CustomersIndexComponent,
  },
  {
    path: 'create',
    component: CustomersFormComponent,
  },

  {
    path: 'edit/:id',
    component: CustomersFormComponent,
  },
  {
    path: 'detail/:id',
    component: CustomersFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
