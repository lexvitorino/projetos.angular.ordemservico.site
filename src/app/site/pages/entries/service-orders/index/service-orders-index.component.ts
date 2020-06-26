import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationsService } from './../../../../../theme/shared/services/confirmation.service';
import { DataTablesService } from './../../../../../theme/shared/services/datatables.service';
import { NotificationsService } from './../../../../../theme/shared/services/notifications.service';
import { ServiceOrdersService } from './../service-orders.service';

@Component({
  selector: 'app-service-orders-index',
  templateUrl: './service-orders-index.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrdersIndexComponent implements OnInit, AfterViewInit {

  title = 'Cadastro de Ordens de Serviço';

  constructor(
    private router: Router,
    private service: ServiceOrdersService,
    private dataTables: DataTablesService,
    private confirmations: ConfirmationsService,
    private notifications: NotificationsService
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.service.get().subscribe(res => {
      const columns = [
        this.dataTables.getDataString('order_number', 'Nº Ordem', '10%'),
        this.dataTables.getDataDateTime('order_date', 'Data', 'DD/MM/YYYY', '10%'),
        this.dataTables.getDataObject('customer', 'name', 'Cliente'),
        this.dataTables.getDataObject('support', 'name', 'Suporte'),
        this.dataTables.getDataDouble('total_value', 'Total Ordem', '1.2-2', '10%'),
      ];

      this.dataTables.dataTable('dataTable', columns, res, (aData: any) => {
        this.service.data = Object.assign({}, this.service.data, aData);
      });
    });
  }

  create() {
    this.router.navigate([this.service.stateUrl, 'create']);
  }

  edit() {
    this.service.isSelected(
      this.service.data,
      () => this.router.navigate([this.service.stateUrl, 'edit', this.service.data.id]),
      () => this.notifications.warning('Ops..', 'Selecione um registro!')
    );
  }

  delete() {
    this.service.isSelected(
      this.service.data,
      () => {
        this.confirmations.delete(() => {
          this.service.delete(this.service.data.id).subscribe(res => {
            if (res.error) {
              this.notifications.error(this.title, res.error);
              return;
            }
            this.notifications.success(this.title, 'Registro removido com sucesso!');
            this.dataTables.delete('dataTable');
          });
        });
      },
      () => this.notifications.warning('Ops..', 'Selecione um registro!')
    );
  }
}
