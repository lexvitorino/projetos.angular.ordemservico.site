import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicModalRoutingModule } from './basic-modal-routing.module';
import { BasicModalComponent } from './basic-modal.component';

@NgModule({
  imports: [
    CommonModule,
    BasicModalRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ],
  declarations: [BasicModalComponent]
})
export class BasicModalModule { }
