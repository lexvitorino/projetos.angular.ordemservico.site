import { AbstractControl } from '@angular/forms';
export class DateTimeService {

  public static dateToString(date: Date) {
    if (!date || date === null) {
      return null;
    }

    const dia = date.getDate().toString();
    const diaF = (dia.length === 1) ? '0' + dia : dia;
    const mes = (date.getMonth() + 1).toString();
    const mesF = (mes.length === 1) ? '0' + mes : mes;
    const anoF = date.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  public static dateTimeToString(date: Date) {
    if (!date || date === null) {
      return null;
    }

    const dia = date.getDate().toString();
    const diaF = (dia.length === 1) ? '0' + dia : dia;
    const mes = (date.getMonth() + 1).toString();
    const mesF = (mes.length === 1) ? '0' + mes : mes;
    const anoF = date.getFullYear();
    const hh = date.getHours().toString();
    const hhF = (hh.length === 1) ? '0' + hh : hh;
    const mm = date.getMinutes().toString();
    const mmF = (mm.length === 1) ? '0' + mm : mm;
    return `${diaF}/${mesF}/${anoF} ${hhF}:${mmF}`;
  }

  public static stringToDateTime(date: string): Date {
    return this.stringToDate(date, true);
  }

  public static stringToDate(date: string, time: boolean = true): Date {
    if (!date || date === null || date === '') {
      return null;
    }

    if (date.length === 10) {
      date = date + ' 00:00:00';
    }

    const array = date.split(' ');
    const aDate = array[0].split('/');

    if (time) {
      const aTime = array[1].split(':');

      return new Date(Number(aDate[2]),
        Number(aDate[1]) - 1,
        Number(aDate[0]),
        Number(aTime[0]),
        Number(aTime[1]),
        0);
    }

    return new Date(Number(aDate[2]), Number(aDate[1]) - 1, Number(aDate[0]));
  }

  public static dateTimeUTCToDate(date: string, time: boolean = true): Date {
    if (!date || date === null) {
      return null;
    }
    const b = date.split(/\D+/);
    if (time) {
      return new Date(Date.UTC(
        Number(b[0]),
        Number(b[1]) - 1,
        Number(b[2]),
        Number(b[3]),
        Number(b[4]),
        Number(b[5]),
        Number(b[6])));
    }

    return new Date(
      Number(b[0]),
      Number(b[1]) - 1,
      Number(b[2]),
      0,
      0,
      0,
      0);
  }

  public static dateTimeUTCToString(date: string, time: boolean = true): string {
    const d = this.dateTimeUTCToDate(date, time);
    if (time) {
      return this.dateTimeToString(d);
    } else {
      return this.dateToString(d);
    }
  }

  public static stringToDateControl(control: AbstractControl, time: boolean = false): Date {
    if (!control.value) {
      return null;
    }
    return this.stringToDate(control.value, time);
  }
}
