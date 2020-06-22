import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { TblBorderRoutingModule } from './tbl-border-routing.module';
import { TblBorderComponent } from './tbl-border.component';

@NgModule({
  declarations: [TblBorderComponent],
  imports: [
    CommonModule,
    TblBorderRoutingModule,
    SharedModule
  ]
})
export class TblBorderModule { }
