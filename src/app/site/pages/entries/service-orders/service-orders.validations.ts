import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdersValidators {

  constructor() {
  }

  validators(form: FormGroup): string[] {
    const result = [];

    let error = '';

    error = this.nameIsValid(form.controls['name']);
    if (error !== '') {
      result.push(error);
    }

    error = this.cpfIsValid(form.controls['inscription']);
    if (error !== '') {
      result.push(error);
    }

    error = this.emailIsValid(form.controls['email']);
    if (error !== '') {
      result.push(error);
    }

    error = this.telephoneIsValid(form.controls['telephone']);
    if (error !== '') {
      result.push(error);
    }

    error = this.zipCodeIsValid(form.controls['zip_code']);
    if (error !== '') {
      result.push(error);
    }

    return result;
  }

  private nameIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.required) {
          return 'Campo nome é obrigatório';
        }
      }
    }
    return '';
  }

  private cpfIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.cpf) {
          return 'Campo cpf é inválido';
        }
      }
    }
    return '';
  }

  private telephoneIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.telefone) {
          return 'Campo telefone é inválido';
        }
      }
    }
    return '';
  }

  private zipCodeIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.cep) {
          return 'Campo cep é inválido';
        }
      }
    }
    return '';
  }

  private emailIsValid(control: AbstractControl): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.email) {
          return 'Campo e-mail é inválido';
        }
      }
    }
    return '';
  }

}
