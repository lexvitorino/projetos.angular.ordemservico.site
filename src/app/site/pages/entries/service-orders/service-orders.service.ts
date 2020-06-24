import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../../theme/shared/services/base.service';
import { ServiceOrdersModel } from './service-orders.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdersService extends BaseService<ServiceOrdersModel> {

  public stateUrl = '/pages/entities/serviceOrders';
  public data: ServiceOrdersModel;

  constructor(http: HttpClient) {
    super(http, 'serviceOrders');
  }
}
