import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITarefas, categoryEditTask, deleteTask } from 'src/app/store/app.state';
import { showContent, showModalContent } from 'src/app/store/content.state ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private store: Store<{ app: ITarefas }>, private content: Store<{ content: any }>, private renderer: Renderer2, private elementRef: ElementRef) { }

  id!: number;
  task!: string;
  category!: string;

  items$ = this.store
    .select('app')
    .pipe(
      map(e => e.item)
    )

  box$ = this.content
    .select('content')
    .pipe(
      map(e => e.box)
    )

  showForm(event: boolean) {
    this.id = 0
    this.task = ''
    this.category = ''
    this.content.dispatch(showContent({ value: true }))
    const form = this.elementRef.nativeElement.querySelector('#form');
    if (event) {
      this.renderer.setStyle(form, 'transform', 'translateX(0%)');
    } else {
      this.renderer.setStyle(form, 'transform', 'translateX(100%)');
    }
  }

  updateTask(task: any) {
    this.id = task.id
    this.task = task.task
    this.category = task.category
    this.content.dispatch(showContent({ value: false }))
    const form = this.elementRef.nativeElement.querySelector('#form');
    this.renderer.setStyle(form, 'transform', 'translateX(0%)');
  }

  deleteTask(id: number) {
    this.id = id
    this.content.dispatch(showModalContent())
    const form = this.elementRef.nativeElement.querySelector('#form');
    this.renderer.setStyle(form, 'transform', 'translateX(100%)');
  }

  editCategory(task: any, value: string) {
    this.id = task.id
    this.task = task.task
    this.category = task.category
    this.store.dispatch(categoryEditTask({ task: this.task, category: value, id: this.id }))
  }

}
