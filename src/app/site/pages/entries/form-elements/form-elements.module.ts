import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { FormElementsRoutingModule } from './form-elements-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class FormElementsModule { }
