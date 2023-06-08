import { createAction, createReducer, on, props } from "@ngrx/store";

interface ITarefa {
  id: number;
  task: string;
  category: string;
}

export interface ITarefas {
  item: ITarefa[];
}

const localItem = localStorage.getItem('item');
const parsedItem = localItem ? JSON.parse(localItem) : null;

export const addNewTask = createAction('[App] Create new task', props<{ task: string, category: string }>());
export const deleteTask = createAction('[App] Delete task', props<{ id: number }>());

export const appInitialState: ITarefas = {
  item: localItem ? parsedItem : []
}

export const appReducer = createReducer(
  appInitialState,

  on(addNewTask, (state, action) => {

    const novaTask: ITarefa = {
      id: state.item.length + 1,
      task: action.task,
      category: action.category
    };

    const newTaskArray: ITarefa[] = Array.isArray(state.item) ? state.item : [];

    localStorage.setItem('item', JSON.stringify([...newTaskArray, novaTask]))

    return {
      ...state,
      item: [...newTaskArray, novaTask]
    }

  }),

  on(deleteTask, (state, action) => {

    const filter = state.item.filter((e: ITarefa) => e.id !== action.id);

    localStorage.setItem('item', JSON.stringify(filter))

    return {
      ...state,
      item: filter
    }

  })

);
