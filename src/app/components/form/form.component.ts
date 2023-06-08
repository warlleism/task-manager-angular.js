import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITarefas, addNewTask } from 'src/app/store/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  task!: string;
  category!: string;

  @Output() hiddenForm: EventEmitter<any> = new EventEmitter()

  constructor(private store: Store<{ app: ITarefas }>) { }

  hiddenClick() {
    this.hiddenForm.emit()
  }

  createNewTask() {
    this.store.dispatch(addNewTask({ task: this.task, category: this.category }))
  }


}
