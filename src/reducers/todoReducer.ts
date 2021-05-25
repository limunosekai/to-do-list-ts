import { createReducer } from 'typesafe-actions';
import { todoAction } from '../actions/todoAction';
import * as actions from '../actions/types';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const todoReducer = createReducer<TodoState, todoAction>(initialState, {
  [actions.ADD_POST]: (state, action) => state.concat({
    ...action.payload,
    done: false
  }),
  [actions.TOGGLE_POST]: (state, action) => state.map(
    todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo
  ),
  [actions.REMOVE_POST]: (state, action) => state.filter(
    todo => todo.id !== action.payload
  )
})


// function todoReducer(state: TodoState = initialState, action: TodoAction ): TodoState {
//   switch(action.type) {
//     case actions.ADD_POST:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false
//       });
//     case actions.TOGGLE_POST:
//       return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
//     case actions.REMOVE_POST:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

export default todoReducer;