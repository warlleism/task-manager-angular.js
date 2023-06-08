import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITarefas, deleteTask } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private store: Store<{ app: ITarefas }>, private renderer: Renderer2, private elementRef: ElementRef) { }


  items$ = this.store
    .select('app')
    .pipe(
      map(e => e.item)
    )

  showForm(event: boolean) {
    const form = this.elementRef.nativeElement.querySelector('#form');
    if (event) {
      this.renderer.setStyle(form, 'transform', 'translateX(0%)');
    } else {
      this.renderer.setStyle(form, 'transform', 'translateX(100%)');
    }
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id: id }))
  }

}
