import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addPost, removePost, togglePost } from '../actions/todoAction';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { RootState } from '../reducers/index';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addPost(text));
  }

  const onToggle = (id: number) => {
    dispatch(togglePost(id));
  }

  const onRemove = (id: number) => {
    dispatch(removePost(id));
  }

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  )
}

export default TodoApp
