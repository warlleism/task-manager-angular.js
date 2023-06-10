import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITarefas, addNewTask, updateTask } from 'src/app/store/app.state';
import { IContent } from 'src/app/store/content.state ';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private store: Store<{ app: ITarefas }>, private content: Store<{ content: IContent }>) { }

  @Input() id!: number;
  @Input() task!: string;
  @Input() category!: string;

  @Output() hiddenForm: EventEmitter<any> = new EventEmitter()

  value$ = this.content
    .select('content')
    .pipe(
      map(e => e.value)
    )


  hiddenClick() {
    this.hiddenForm.emit()
  }

  createNewTask() {
    console.log(this.value$)

    this.store.dispatch(addNewTask({ task: this.task, category: this.category }))
  }

  updateTask() {
    this.store.dispatch(updateTask({ id: this.id, task: this.task, category: this.category }))
    window.location.reload();
  }


}
