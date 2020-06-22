import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../../theme/shared/services/base.service';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<UsersModel> {

  public stateUrl = '/pages/entities/users';
  public data: UsersModel;

  constructor(http: HttpClient) {
    super(http, 'users');
  }
}
