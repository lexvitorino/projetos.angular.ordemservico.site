import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() {
  }

  public isUndefinedOrNull(obj: any): boolean {
    if (obj === undefined || obj == null) {
      return true;
    }
    return false;
  }

  public isNotUndefinedOrNull(obj: any): boolean {
    return !this.isUndefinedOrNull(obj);
  }
}
