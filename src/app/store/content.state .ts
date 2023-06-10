import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IContent {
  value: boolean,
  box: boolean
}

export const showContent = createAction('[App] Show Form', props<{ value: boolean }>());
export const showModalContent = createAction('[App] Show Modal');

export const appInitialState: IContent = {
  value: false,
  box: false
}

export const appReducerContent = createReducer(
  appInitialState,

  on(showContent, (state, action) => {
    state = {
      value: action.value,
      box: state.box
    }

    return state
  }),

  on(showModalContent, (state => {

    return {
      ...state,
      box: !state.box
    }
  })

  )
)
