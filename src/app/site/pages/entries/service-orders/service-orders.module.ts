import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { ServiceOrdersRoutingModule } from './service-orders.routing.module';
import { ServiceOrdersFormComponent } from './form/service-orders-form.component';
import { ServiceOrdersIndexComponent } from './index/service-orders-index.component';

@NgModule({
  imports: [SharedModule, ServiceOrdersRoutingModule],
  declarations: [ServiceOrdersIndexComponent, ServiceOrdersFormComponent]
})
export class ServiceOrdersModule {
}
