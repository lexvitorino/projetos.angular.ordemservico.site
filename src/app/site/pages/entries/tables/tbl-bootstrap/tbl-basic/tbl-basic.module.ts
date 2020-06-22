import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { TblBasicRoutingModule } from './tbl-basic-routing.module';
import { TblBasicComponent } from './tbl-basic.component';

@NgModule({
  declarations: [TblBasicComponent],
  imports: [
    CommonModule,
    TblBasicRoutingModule,
    SharedModule
  ]
})
export class TblBasicModule { }
