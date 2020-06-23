import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationsService } from './../../../../../theme/shared/services/confirmation.service';
import { DataTablesService } from './../../../../../theme/shared/services/datatables.service';
import { NotificationsService } from './../../../../../theme/shared/services/notifications.service';
import { CustomersService } from './../customers.service';

@Component({
  selector: 'app-customers-index',
  templateUrl: './customers-index.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CustomersIndexComponent implements OnInit, AfterViewInit {

  title = 'Cadastro de Clientes';

  constructor(
    private router: Router,
    private service: CustomersService,
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
        this.dataTables.getDataString('name', 'Nome'),
        this.dataTables.getDataString('inscription', 'CNPJ/CPF', '20%'),
        this.dataTables.getDataString('document', 'IE/RG', '20%'),
        this.dataTables.getDataString('email', 'E-mail', '20%'),
        this.dataTables.getDataString('telephone', 'Telefone', '20%'),
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
