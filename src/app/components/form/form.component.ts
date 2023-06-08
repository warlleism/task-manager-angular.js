import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() hiddenForm: EventEmitter<any> = new EventEmitter()

  hiddenClick() {
    this.hiddenForm.emit()
  }
}
