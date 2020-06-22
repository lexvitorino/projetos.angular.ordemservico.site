import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesGuard } from './entries/entries.guard';
import { PagesGuard } from './pages.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [PagesGuard],
    data: { permission: [0] }
  },
  {
    path: 'entities',
    loadChildren: () => import('./entries/entries.module').then(m => m.EntriesModule),
    canActivate: [PagesGuard],
    canActivateChild: [EntriesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
