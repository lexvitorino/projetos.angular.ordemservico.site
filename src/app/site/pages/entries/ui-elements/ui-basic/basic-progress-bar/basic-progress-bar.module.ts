import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicProgressBarRoutingModule } from './basic-progress-bar-routing.module';
import { BasicProgressBarComponent } from './basic-progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BasicProgressBarRoutingModule,
    SharedModule,
    NgbProgressbarModule
  ],
  declarations: [BasicProgressBarComponent]
})
export class BasicProgressBarModule { }
