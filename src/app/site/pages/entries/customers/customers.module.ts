import { NgModule } from '@angular/core';
import { SharedModule } from './../../../../theme/shared/shared.module';
import { CustomersRoutingModule } from './customers.routing.module';
import { CustomersFormComponent } from './form/customers-form.component';
import { CustomersIndexComponent } from './index/customers-index.component';

@NgModule({
  imports: [SharedModule, CustomersRoutingModule],
  declarations: [CustomersIndexComponent, CustomersFormComponent]
})
export class CustomersModule {
}
