import { DateTimeService } from './../../../../../theme/shared/utils/datetime-utils';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MASKS } from 'ng-brazil';
import { Observable } from 'rxjs';
import { FunctionsUtils } from '../../../../../theme/shared/utils/functions-utils';
import { CustomersModel } from '../../customers/customers.model';
import { UsersModel } from '../../users/users.model';
import { ServiceOrdersService } from '../service-orders.service';
import { ServiceOrdersValidators } from '../service-orders.validations';
import { NotificationsService } from './../../../../../theme/shared/services/notifications.service';
import { CustomersService } from './../../customers/customers.service';
import { UsersService } from './../../users/users.service';

@Component({
  selector: 'app-service-orders-form',
  templateUrl: './service-orders-form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ServiceOrdersFormComponent implements OnInit, AfterViewInit {

  formData: FormGroup;
  isEditing: boolean;
  errors: string[];
  customers: Observable<CustomersModel[]>;
  supports: Observable<UsersModel[]>;

  public MASKS = MASKS;

  title = 'Cadastro de Ordem de Serviço';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: ServiceOrdersService,
    private validators: ServiceOrdersValidators,
    private notifications: NotificationsService,
    public usersService: UsersService,
    public customersService: CustomersService
  ) {
    this.customers = customersService.get();
    this.supports = usersService.supports();
  }

  ngOnInit() {
    this.clear();
  }

  private clear() {
    this.formData = this.formBuilder.group({
      id: [null],
      subscriber_id: [null],
      order_number: [null, [Validators.required]],
      order_date: [null],
      order_date_fmt: [null, [Validators.required]],
      customer_id: [null, [Validators.required]],
      support_id: [null, [Validators.required]],
      problem_description: [null, [Validators.required]],
      solution_description: [null],
      warranty_date: [null],
      warranty_date_fmt: [null],
      review_date: [null],
      review_date_fmt: [null],
      parts_value: [null],
      labor_value: [null],
      total_value: [null]
    });
  }

  ngAfterViewInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.isEditing = FunctionsUtils.isNotUndefinedOrNull(id);
    if (this.isEditing) {
      this.service.getById(id).subscribe(res => {
        this.formData.patchValue({
          id: res.id,
          subscriber_id: res.subscriber_id,
          order_number: res.order_number,
          order_date: res.order_date,
          order_date_fmt: DateTimeService.dateTimeUTCToString(res.order_date),
          customer_id: res.customer_id,
          support_id: res.support_id,
          problem_description: res.problem_description,
          solution_description: res.solution_description,
          warranty_date: res.warranty_date,
          warranty_date_fmt: DateTimeService.dateTimeUTCToString(res.warranty_date),
          review_date: res.review_date,
          review_date_fmt: DateTimeService.dateTimeUTCToString(res.review_date),
          labor_value: res.labor_value,
          parts_value: res.parts_value,
          total_value: res.total_value
        });
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

    const orderDate: Date = DateTimeService.stringToDateControl(this.formData.controls['order_date_fmt']);
    this.formData.controls['order_date'].setValue(orderDate);

    const warrantyDate: Date = DateTimeService.stringToDateControl(this.formData.controls['warranty_date_fmt']);
    this.formData.controls['warranty_date'].setValue(warrantyDate);

    const reviewDate: Date = DateTimeService.stringToDateControl(this.formData.controls['review_date_fmt']);
    this.formData.controls['review_date'].setValue(reviewDate);

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

  onCalculate() {
    const laborValue = parseFloat(this.formData.controls['labor_value'].value);
    const partsValue = parseFloat(this.formData.controls['parts_value'].value);
    this.formData.controls['total_value'].setValue((laborValue ?? 0) + (partsValue ?? 0));
  }
}
