import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicGridRoutingModule } from './basic-grid-routing.module';
import { BasicGridComponent } from './basic-grid.component';

@NgModule({
  imports: [
    CommonModule,
    BasicGridRoutingModule,
    SharedModule
  ],
  declarations: [BasicGridComponent]
})
export class BasicGridModule { }
