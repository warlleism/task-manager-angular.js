import { createReducer } from "@ngrx/store"

export interface ITarefas {
  item: { [key: string]: any }
}

export const appInitialState: ITarefas = {
  item: [
    { image: '', task: 'Projeto em Angular A Fazer', type: 'A Fazer' },
    { image: '', task: 'Projeto em Angular A Fazer', type: 'A Fazer' },
    { image: '', task: 'Projeto em Angular A Fazer', type: 'A Fazer' },
    { image: '', task: 'Projeto em Angular Fazendo', type: 'Fazendo' },
    { image: '', task: 'Projeto em Angular Entregues', type: 'Entregues' },
    { image: '', task: 'Projeto em Angular Entregues', type: 'Entregues' },
  ]
}

export const appReducer = createReducer(
  appInitialState
)
