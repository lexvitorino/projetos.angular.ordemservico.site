import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicTooltipPopoversRoutingModule } from './basic-tooltip-popovers-routing.module';
import { BasicTooltipPopoversComponent } from './basic-tooltip-popovers.component';

@NgModule({
  imports: [
    CommonModule,
    BasicTooltipPopoversRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbPopoverModule
  ],
  declarations: [BasicTooltipPopoversComponent]
})
export class BasicTooltipPopoversModule { }
