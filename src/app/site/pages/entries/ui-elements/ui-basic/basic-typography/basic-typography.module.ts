import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicTypographyRoutingModule } from './basic-typography-routing.module';
import { BasicTypographyComponent } from './basic-typography.component';

@NgModule({
  imports: [
    CommonModule,
    BasicTypographyRoutingModule,
    SharedModule
  ],
  declarations: [BasicTypographyComponent]
})
export class BasicTypographyModule { }
