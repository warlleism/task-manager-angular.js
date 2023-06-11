import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
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

  constructor(private store: Store<{ app: ITarefas }>, private content: Store<{ content: IContent }>, private renderer: Renderer2, private elementRef: ElementRef) { }

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
    this.store.dispatch(addNewTask({ task: this.task, category: this.category }))
    const form = this.elementRef.nativeElement.querySelector('#form');
    this.renderer.setStyle(form, 'transform', 'translateX(200%)');
  }

  updateTask() {
    this.store.dispatch(updateTask({ id: this.id, task: this.task, category: this.category }))
    window.location.reload();
    const form = this.elementRef.nativeElement.querySelector('#form');
    this.renderer.setStyle(form, 'transform', 'translateX(200%)');
  }


}
