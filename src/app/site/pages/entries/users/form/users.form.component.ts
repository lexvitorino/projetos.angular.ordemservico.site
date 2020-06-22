import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { FunctionsService } from '../../../../../theme/shared/services/functions.service';
import { NotificationsService } from '../../../../../theme/shared/services/notifications.service';
import { UsersService } from '../users.service';
import { UsersValidators } from '../users.validators';
import { FilesModel } from './../../files/files.model';
import { FilesService } from './../../files/files.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users.form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UsersFormComponent implements OnInit, AfterViewInit {

  formData: FormGroup;
  isEditing: boolean;
  errors: string[];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  imageURL: string;
  imageName: string;
  imageFile: any;
  imagemOriginalSrc: any;

  title = 'Cadastro de Usuário';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private validators: UsersValidators,
    private notifications: NotificationsService,
    private functions: FunctionsService,
    private files: FilesService,
    public service: UsersService,
  ) {
  }

  ngOnInit() {
    this.clear();
  }

  private clear() {
    this.formData = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      fileAvatar: [null],
      permission: [0]
    });
  }

  ngAfterViewInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.isEditing = this.functions.isNotUndefinedOrNull(id);
    if (this.isEditing) {
      this.service.getById(id).subscribe(res => {
        this.service.data = res;
        this.formData.patchValue({
          id: this.service.data.id,
          name: this.service.data.name,
          email: this.service.data.email,
          avatar_id: this.service.data.avatar_id,
          permission: this.service.data.permission,
          avatar: this.service.data.avatar
        });
        if (res.avatar) {
          this.imagemOriginalSrc = res.avatar.path;
        }
      });
    }
  }

  async onSubmit(action: string = '*') {
    if (this.formData.invalid) {
      this.errors = this.validators.validators(this.formData);
      if (this.errors.length > 0) {
        this.notifications.error(this.title, this.notifications.errors(this.errors));
      }
      return;
    }

    this.service.data = Object.assign({}, this.service.data, this.formData.value);

    if (this.imageName && this.imagemOriginalSrc !== this.imageName) {
      const avatar: FilesModel = await this.saveAvatar();
      if (avatar) {
        this.service.data.avatar_id = avatar.id;
      }
    }

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

  saveAvatar() {
    const promise = new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', this.imageFile);
      this.files.create(formData).subscribe((res: FilesModel) => {
        if (res.error) {
          this.notifications.error(this.title, res.error);
          reject(res);
        }
        resolve(res);
      });
    });
    return promise;
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

  /* AVATAR */

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageName = event.currentTarget.files[0].name;
    this.imageFile = event.currentTarget.files[0];
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    this.errors.push('O formato do arquivo ' + this.imageName + ' não é aceito.');
  }

  /* *** AVATAR */
}
