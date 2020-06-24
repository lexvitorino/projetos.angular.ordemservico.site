import { Injectable, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { valueOf } from 'screenfull';
import { CurrencyUtils } from '../utils/currency-utils';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class DataTablesService implements OnDestroy {
  public i18n: any;
  public table: any;
  public sub: any;
  public sub2: any;
  public rowsChecked: any;

  constructor(
  ) {
  }

  getOptions(
    columns: any,
    data: any,
    callback: any,
    formatCallback: any = null
  ) {
    return {
      language: {
        url: `./assets/data/datatables.json`
      },
      scrollX: '100%',
      destroy: true,
      columns,
      data,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'Todos']],
      select: true,
      rowCallback: (row: any, data: any, index: any) => {
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          $('.table td').removeClass('rowSelect');
          $('td', row).addClass('rowSelect');
          callback(data);
        });
        if (formatCallback) {
          formatCallback(row, data);
        }
        return row;
      },
      sPaginationType: 'full_numbers'
    };
  }

  dataTable(
    tableId: string,
    column: any,
    data: any,
    callback: any,
    formatCallback: any = null
  ) {
    this.table = $(`#${tableId}`);
    setTimeout(() => {
      this.table.DataTable(
        this.getOptions(
          column,
          data,
          callback,
          formatCallback
        )
      );
    });
  }

  delete(tableId: string) {
    $(`#${tableId} .rowSelect`).remove();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getDataID(colData: string = 'id') {
    return {
      data: colData,
      title: 'ID',
      width: '10%'
    };
  }

  getDataString(colData: string, colTitle: string, colWidth: string = '') {
    return {
      data: colData,
      title: colTitle,
      width: colWidth
    };
  }

  getDataStringFormat(colData: string, colTitle: string, colWidth: string, searchValue: string, newValue: string) {
    return {
      data: colData,
      title: colTitle,
      width: colWidth,
      render: (data: any, type: any) => {
        if (type === 'sort' || type === 'type') {
          return data;
        } else {
          return (type === 'display' || type === 'filter')
            ? data.replace(searchValue, newValue)
            : data;
        }
      }
    };
  }

  getDataBool(colData: string, colTitle: string, colWidth: string = '') {
    return {
      data: colData,
      title: colTitle,
      width: colWidth,
      render: (data: any, type: any) => {
        if (type === 'sort' || type === 'type') {
          return data;
        } else {
          return (type === 'display' || type === 'filter') && data
            ? 'Sim'
            : 'Não';
        }
      }
    };
  }

  getDataDouble(colData: string, colTitle: string, colDecimals: number = 0, colWidth: string = '') {
    return {
      data: colData,
      title: colTitle,
      width: colWidth,
      className: 'text-right',
      render: (data: any, type: any) => {
        if ((type === 'sort' || type === 'type') && data !== undefined && data !== null) {
          const value = CurrencyUtils.DecimalParaString(data);
          return value;
        } else {
          return data;
        }
      }
    };
  }

  getDataDateTime(colData: string, colTitle: string, colFormat: string = 'DD/MM/YYYY HH:mm:ss', colWidth: string = '') {
    return {
      data: colData,
      title: colTitle,
      width: colWidth,
      render: (data: any, type: any) => {
        if (type === 'sort' || type === 'type') {
          return (data ? moment(data).format(colFormat) : '');
        } else {
          return (data ? moment(data).format(colFormat) : '');
        }
      }
    };
  }

  getDataSelect(colData: string, colTitle: string, colSelect: any, colWidth: string = '') {
    return {
      data: colData,
      title: colTitle,
      width: colWidth,
      render: (data: any, type: any) => {
        if (type === 'sort' || type === 'type') {
          return data;
        } else {
          if ((type === 'display' || type === 'filter')) {
            let r = '';
            colSelect.get.filter((e: any) => {
              if (e.id === data) {
                r = e.description;
              }
            });
            return r;
          } else {
            return data;
          }
        }
      }
    };
  }

  getDataObject(colObject: string, colData: string, colTitle: string, colWidth: string = '') {
    return {
      data: (row: any, type: any) => {
        if (type === 'sort' || type === 'type' && row[colObject] !== null) {
          return row[colObject][colData].trim();
        } else if (type === 'display' && row[colObject] !== null) {
          return row[colObject][colData].trim();
        } else {
          return '';
        }
      },
      title: colTitle,
      width: colWidth
    };
  }

  getDataObjectLv2(colObject: string, colObject1: any, colData: string, colTitle: string, colWidth: string = '') {
    return {
      data: (row: any, type: any) => {
        if (type === 'sort' || type === 'type' && row[colObject] !== null && row[colObject][colObject1] !== null) {
          return row[colObject][colObject1][colData].trim();
        } else if (type === 'display' && row[colObject] !== null && row[colObject][colObject1] !== null) {
          return row[colObject][colObject1][colData].trim();
        } else {
          return '';
        }
      },
      title: colTitle,
      width: colWidth
    };
  }
}
