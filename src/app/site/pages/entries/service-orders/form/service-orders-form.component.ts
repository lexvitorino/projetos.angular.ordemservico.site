import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { FunctionsUtils } from '../../../../../theme/shared/utils/functions-utils';
import { ServiceOrdersService } from '../service-orders.service';
import { ServiceOrdersValidators } from '../service-orders.validations';
import { NotificationsService } from './../../../../../theme/shared/services/notifications.service';

@Component({
  selector: 'app-service-orders-form',
  templateUrl: './service-orders-form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrdersFormComponent implements OnInit, AfterViewInit {

  formData: FormGroup;
  isEditing: boolean;
  errors: string[];

  public MASKS = MASKS;

  title = 'Cadastro de Clientes';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: ServiceOrdersService,
    private validators: ServiceOrdersValidators,
    private notifications: NotificationsService
  ) {
  }

  ngOnInit() {
    this.clear();
  }

  private clear() {
    this.formData = this.formBuilder.group({
      id: [null],
      subscriber_id: [null],
      name: [null, [Validators.required]],
      document: [null],
      inscription: [null, [NgBrazilValidators.cpf]],
      email: [null, [Validators.email]],
      telephone: [null, [NgBrazilValidators.telefone]],
      zip_code: [null, [NgBrazilValidators.cep]],
      street: [null],
      number: [null],
      neighborhood: [null],
      city: [null],
      state: [null],
      complement: [null]
    });
  }

  ngAfterViewInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.isEditing = FunctionsUtils.isNotUndefinedOrNull(id);
    if (this.isEditing) {
      this.service.getById(id).subscribe(res => {
        this.formData.patchValue(res);
      });
    }
  }

  onSubmit(action: string = '*') {
    if (this.formData.invalid) {
      this.errors = this.validators.validators(this.formData);
      if (this.errors.length > 0) {
        this.notifications.error(this.title, this.notifications.errors(this.errors));
      }
      return;
    }

    this.service.data = Object.assign({}, this.service.data, this.formData.value);
    this.service.save(this.service.data, this.isEditing).subscribe(res => {
      if (res.error) {
        this.notifications.error(this.title, res.error);
        return;
      }

      this.notifications.success(this.title, 'Registro salvo com sucesso!');
      if (!this.isEditing && action === '*') {
        this.router.navigate([this.service.stateUrl, 'edit', res.id]);
      } else if (action === 'N') {
        this.router.navigate([this.service.stateUrl, 'create']);
        this.clear();
      } else if (action === 'B') {
        this.onBack();
      }
    });
  }

  onSubmitAndCreate() {
    this.onSubmit('N');
  }

  onSubmitAndBack() {
    this.onSubmit('B');
  }

  onBack() {
    this.router.navigate([this.service.stateUrl]);
  }
}
