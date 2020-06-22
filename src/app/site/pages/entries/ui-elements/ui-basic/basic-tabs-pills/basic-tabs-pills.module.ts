import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicTabsPillsRoutingModule } from './basic-tabs-pills-routing.module';
import { BasicTabsPillsComponent } from './basic-tabs-pills.component';

@NgModule({
  imports: [
    CommonModule,
    BasicTabsPillsRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [BasicTabsPillsComponent]
})
export class BasicTabsPillsModule { }
