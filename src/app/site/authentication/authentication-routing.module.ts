import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () => import('./auth-signup/auth-signup.module').then(module => module.AuthSignupModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
  },
  {
    path: 'change-password/:email',
    loadChildren: () => import('./auth-change-password/auth-change-password.module').then(module => module.AuthChangePasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
