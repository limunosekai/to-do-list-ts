import { createAction, ActionType } from 'typesafe-actions';
import { Todo } from '../reducers/todoReducer';
import * as actions from './types';

// 게시글 항목 유니크 ID
let nextId = 1;

export const addPost = createAction(actions.ADD_POST, (text: string) => ({
  id: nextId++,
  text
}))<Todo>();

// export const addPost = (text: string) => {
//   return {
//     type: actions.ADD_POST,
//     payload: {
//       id: nextId++,
//       text
//     }
//   }
// }

export const togglePost = createAction(actions.TOGGLE_POST)<number>();

// export const togglePost = (id: number) => {
//   return {
//     type: actions.TOGGLE_POST,
//     payload: id
//   }
// }

export const removePost = createAction(actions.REMOVE_POST)<number>();

// export const removePost = (id: number) => {
//   return {
//     type: actions.REMOVE_POST,
//     payload: id
//   }
// }

const todoActions = { addPost, togglePost, removePost };
export type todoAction = ActionType<typeof todoActions>;

// export type TodoAction = 
//   | ReturnType<typeof addPost>
//   | ReturnType<typeof togglePost>
//   | ReturnType<typeof removePost>