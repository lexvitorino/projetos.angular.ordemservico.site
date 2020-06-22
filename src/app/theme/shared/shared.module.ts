import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LightboxModule } from 'ngx-lightbox';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
/*import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';*/
import { AlertModule, BreadcrumbModule, CardModule, ModalModule } from './components';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { ApexChartComponent } from './components/chart/apex-chart/apex-chart.component';
import { ApexChartService } from './components/chart/apex-chart/apex-chart.service';
import { DataFilterPipe } from './components/data-table/data-filter.pipe';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './components/toast/toast.service';
import { TodoCardCompleteDirective } from './components/todo/todo-card-complete.directive';
import { TodoListRemoveDirective } from './components/todo/todo-list-remove.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    ClickOutsideModule,
    LightboxModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true,
      progressBar: true,
      closeButton: true,
    }),
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    ImageCropperModule
  ],
  exports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    DataFilterPipe,
    TodoListRemoveDirective,
    TodoCardCompleteDirective,
    ClickOutsideModule,
    SpinnerComponent,
    ApexChartComponent,
    GalleryComponent,
    ToastComponent,
    ButtonSaveComponent,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    ImageCropperModule
  ],
  declarations: [
    DataFilterPipe,
    TodoListRemoveDirective,
    TodoCardCompleteDirective,
    SpinnerComponent,
    ApexChartComponent,
    ToastComponent,
    GalleryComponent,
    ButtonSaveComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ApexChartService,
    ToastService
  ]
})
export class SharedModule { }
