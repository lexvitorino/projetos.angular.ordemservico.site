import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicButtonRoutingModule } from './basic-button-routing.module';
import { BasicButtonComponent } from './basic-button.component';

@NgModule({
  imports: [
    CommonModule,
    BasicButtonRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule
  ],
  declarations: [BasicButtonComponent]
})
export class BasicButtonModule { }
