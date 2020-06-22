import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonSaveComponent implements OnInit {
  @Output() outSave = new EventEmitter();
  @Output() outSaveAndCreate = new EventEmitter();
  @Output() outSaveAndBack = new EventEmitter();
  @Output() outBack = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  save() {
    this.outSave.emit();
  }

  saveAndCreate() {
    this.outSaveAndCreate.emit();
  }

  saveAndBack() {
    this.outSaveAndBack.emit();
  }

  back() {
    this.outBack.emit();
  }
}
