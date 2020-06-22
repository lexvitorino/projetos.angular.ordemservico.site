import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbButtonsModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BreadcrumbPagingRoutingModule } from './breadcrumb-paging-routing.module';
import { BreadcrumbPagingComponent } from './breadcrumb-paging.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbPagingRoutingModule,
    SharedModule,
    NgbButtonsModule,
    NgbPaginationModule
  ],
  declarations: [BreadcrumbPagingComponent]
})
export class BreadcrumbPagingModule { }
