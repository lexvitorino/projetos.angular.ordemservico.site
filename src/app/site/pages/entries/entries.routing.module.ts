import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(module => module.CustomersModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule {
}

