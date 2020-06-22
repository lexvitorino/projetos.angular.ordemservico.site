import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../theme/shared/shared.module';
import { BasicCardsRoutingModule } from './basic-cards-routing.module';
import { BasicCardsComponent } from './basic-cards.component';

@NgModule({
  imports: [
    CommonModule,
    BasicCardsRoutingModule,
    SharedModule
  ],
  declarations: [BasicCardsComponent]
})
export class BasicCardsModule { }
