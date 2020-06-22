import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./form-elements/form-elements.module').then(module => module.FormElementsModule)
  },
  {
    path: 'tbl-bootstrap',
    loadChildren: () => import('./tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./core-chart/core-chart.module').then(module => module.CoreChartModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./core-maps/core-maps.module').then(module => module.CoreMapsModule)
  },
  {
    path: 'sample-page',
    loadChildren: () => import('./sample-page/sample-page.module').then(module => module.SamplePageModule)
  },
  {
    path: 'basic',
    loadChildren: () => import('./ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule {
}

