import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITarefas, addNewTask, updateTask } from 'src/app/store/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() task!: string;
  @Input() category!: string;
  @Input() id!: number;

  @Output() hiddenForm: EventEmitter<any> = new EventEmitter()

  constructor(private store: Store<{ app: ITarefas }>) { }

  hiddenClick() {
    this.hiddenForm.emit()
  }

  createNewTask() {
    this.store.dispatch(addNewTask({ task: this.task, category: this.category }))
  }

  updateTask() {
    this.store.dispatch(updateTask({ id: this.id, task: this.task, category: this.category }))
    window.location.reload();
  }


}
