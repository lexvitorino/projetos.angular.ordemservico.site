import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicToastsRoutingModule } from './basic-toasts-routing.module';
import { BasicToastsComponent } from './basic-toasts.component';

@NgModule({
  declarations: [BasicToastsComponent],
  imports: [
    CommonModule,
    BasicToastsRoutingModule,
    SharedModule
  ]
})
export class BasicToastsModule { }
