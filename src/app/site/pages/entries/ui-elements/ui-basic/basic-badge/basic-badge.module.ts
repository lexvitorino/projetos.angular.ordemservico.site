import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicBadgeRoutingModule } from './basic-badge-routing.module';
import { BasicBadgeComponent } from './basic-badge.component';

@NgModule({
  imports: [
    CommonModule,
    BasicBadgeRoutingModule,
    SharedModule
  ],
  declarations: [BasicBadgeComponent]
})
export class BasicBadgeModule { }
