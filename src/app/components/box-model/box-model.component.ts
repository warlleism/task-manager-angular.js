import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITarefas, deleteTask } from 'src/app/store/app.state';
import { IContent, showModalContent } from 'src/app/store/content.state ';

@Component({
  selector: 'app-box-model',
  templateUrl: './box-model.component.html',
  styleUrls: ['./box-model.component.scss']
})
export class BoxModelComponent {

  constructor(private content: Store<{ content: IContent }>, private store: Store<{ app: ITarefas }>) { }

  @Input() id!: number;

  box$ = this.content
    .select('content')
    .pipe(
      map(e => e.box)
    )

  hiddenModal() {
    this.content.dispatch(showModalContent())
  }

  deleteTask() {
    this.store.dispatch(deleteTask({ id: this.id }))
    this.content.dispatch(showModalContent())

  }


}
