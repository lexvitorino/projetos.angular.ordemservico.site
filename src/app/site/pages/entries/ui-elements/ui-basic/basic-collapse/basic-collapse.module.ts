import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicCollapseRoutingModule } from './basic-collapse-routing.module';
import { BasicCollapseComponent } from './basic-collapse.component';

@NgModule({
  imports: [
    CommonModule,
    BasicCollapseRoutingModule,
    SharedModule,
    NgbCollapseModule,
    NgbAccordionModule
  ],
  declarations: [BasicCollapseComponent]
})
export class BasicCollapseModule { }
