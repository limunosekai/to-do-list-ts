import * as actions from './types';

// 게시글 항목 유니크 ID
let nextId = 1;

export const addPost = (text: string) => {
  return {
    type: actions.ADD_POST,
    payload: {
      id: nextId++,
      text
    }
  }
}

export const togglePost = (id: number) => {
  return {
    type: actions.TOGGLE_POST,
    payload: id
  }
}

export const removePost = (id: number) => {
  return {
    type: actions.REMOVE_POST,
    payload: id
  }
}

export type TodoAction = 
  | ReturnType<typeof addPost>
  | ReturnType<typeof togglePost>
  | ReturnType<typeof removePost>