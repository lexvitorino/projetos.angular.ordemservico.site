import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../../theme/shared/services/notifications.service';
import { UsersService } from '../users.service';
import { ConfirmationsService } from './../../../../../theme/shared/services/confirmation.service';
import { DataTablesService } from './../../../../../theme/shared/services/datatables.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users.index.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UsersIndexComponent implements OnInit, AfterViewInit {

  title = 'Cadastro de Usuário';

  constructor(
    private router: Router,
    private service: UsersService,
    private notifications: NotificationsService,
    private dataTables: DataTablesService,
    private confirmations: ConfirmationsService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.service.get().subscribe(res => {
      const columns = [
        this.dataTables.getDataID('id'),
        this.dataTables.getDataString('name', 'Nome'),
        this.dataTables.getDataString('email', 'E-mail', '30%'),
        this.dataTables.getDataString('permission', 'Permissão', '30%')
      ];
      this.dataTables.dataTable('dataTable', columns, res, (aData: any) => {
        this.service.data = Object.assign({}, this.service.data, aData);
      });
    });
  }

  isSelected(callback: () => any = null): void {
    if (!this.service.data) {
      this.notifications.warning(this.title, 'Selecione um registro!');
      return;
    }
    if (callback) {
      callback();
    }
  }

  create() {
    this.router.navigate([this.service.stateUrl, 'create']);
  }

  edit() {
    this.isSelected(
      () => this.router.navigate([this.service.stateUrl, 'edit', this.service.data.id])
    );
  }

  delete() {
    this.isSelected(
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
      }
    );
  }
}
