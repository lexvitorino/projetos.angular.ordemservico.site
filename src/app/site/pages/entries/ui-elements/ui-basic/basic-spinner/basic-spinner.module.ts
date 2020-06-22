import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicSpinnerRoutingModule } from './basic-spinner-routing.module';
import { BasicSpinnerComponent } from './basic-spinner.component';

@NgModule({
  declarations: [BasicSpinnerComponent],
  imports: [
    CommonModule,
    BasicSpinnerRoutingModule,
    SharedModule
  ]
})
export class BasicSpinnerModule { }
