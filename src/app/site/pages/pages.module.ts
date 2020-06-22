import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class PagesModule { }
