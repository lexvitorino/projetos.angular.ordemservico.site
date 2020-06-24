import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOrdersIndexComponent } from './index/service-orders-index.component';
import { ServiceOrdersFormComponent } from './form/service-orders-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ServiceOrdersIndexComponent,
  },
  {
    path: 'create',
    component: ServiceOrdersFormComponent,
  },

  {
    path: 'edit/:id',
    component: ServiceOrdersFormComponent,
  },
  {
    path: 'detail/:id',
    component: ServiceOrdersFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ServiceOrdersRoutingModule {
}
