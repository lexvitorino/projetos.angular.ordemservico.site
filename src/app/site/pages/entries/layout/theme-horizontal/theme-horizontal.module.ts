import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../theme/shared/shared.module';
import { CommonContentModule } from '../common-content/common-content.module';
import { ThemeHorizontalRoutingModule } from './theme-horizontal-routing.module';
import { ThemeHorizontalComponent } from './theme-horizontal.component';

@NgModule({
  declarations: [ThemeHorizontalComponent],
  imports: [
    CommonModule,
    ThemeHorizontalRoutingModule,
    SharedModule,
    CommonContentModule
  ]
})
export class ThemeHorizontalModule { }
