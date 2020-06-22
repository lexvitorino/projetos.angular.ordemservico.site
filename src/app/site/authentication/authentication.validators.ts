import { FormGroup, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationValidators {

  constructor() {
  }

  validators(form: FormGroup): string[] {
    const result = [];

    let error = '';

    if (form.controls['name']) {
      error = this.nameIsValid(form.controls['name']);
      if (error && error !== '') {
        result.push(error);
      }
    }

    if (form.controls['email']) {
      error = this.emailIsValid(form.controls['email']);
      if (error && error !== '') {
        result.push(error);
      }
    }

    if (form.controls['password']) {
      error = this.passwordIsValid(form.controls['password']);
      if (error && error !== '') {
        result.push(error);
      }
    }

    if (form.controls['newpassword']) {
      error = this.passwordIsValid(form.controls['newpassword'], 'nova senha');
      if (error && error !== '') {
        result.push(error);
      }
    }

    if (form.controls['repassword']) {
      error = this.passwordIsValid(form.controls['repassword'], 'repite a nova senha');
      if (error && error !== '') {
        result.push(error);
      }
    }

    error = this.passwordIsEqual(form);
    if (error && error !== '') {
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

  private passwordIsValid(control: AbstractControl, label: string = 'senha'): string {
    if (control.invalid) {
      if (control.errors) {
        if (control.errors.required) {
          return `Campo ${label} é obrigatório`;
        } else if (control.errors.minlength) {
          return '6 é o tamanho mínimo para senha';
        }
      }
    }
    return '';
  }

  private passwordIsEqual(form: FormGroup): string {
    if (form.controls['repassword']) {
      if (form.controls['newpassword']) {
        if (form.controls['newpassword'].value !== form.controls['repassword'].value) {
          return `Senhas não conferem`;
        }
      } else if (form.controls['password'].value !== form.controls['repassword'].value) {
        return `Senhas não conferem`;
      }
    }
  }
}
