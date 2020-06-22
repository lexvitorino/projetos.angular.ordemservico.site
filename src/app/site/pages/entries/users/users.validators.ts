import { FormGroup, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersValidators {

  constructor() {
  }

  validators(form: FormGroup): string[] {
    const result = [];

    let error = '';

    error = this.emailIsValid(form.controls['email']);
    if (error !== '') {
      result.push(error);
    }

    return result;
  }

  private emailIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.required) {
          return 'Campo e-mail é obrigatório';
        } else if (control.errors.email) {
          return 'Informe um e-mail válido';
        }
      }
    }
    return '';
  }

}
