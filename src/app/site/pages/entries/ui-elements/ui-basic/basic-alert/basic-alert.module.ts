import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicAlertRoutingModule } from './basic-alert-routing.module';
import { BasicAlertComponent } from './basic-alert.component';

@NgModule({
  imports: [
    CommonModule,
    BasicAlertRoutingModule,
    SharedModule
  ],
  declarations: [BasicAlertComponent]
})
export class BasicAlertModule { }
