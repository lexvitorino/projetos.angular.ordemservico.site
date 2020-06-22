import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationsService {

  constructor() {
  }

  delete(callback: any) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        callback();
      }
    });
  }
}
