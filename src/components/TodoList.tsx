import React from 'react'
import { Todo } from '../reducers/todoReducer'
import TodoItem from './TodoItem'

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList(props: TodoListProps) {
  if (TodoList.length === 0) return <p>오늘 할 일이 없네요...</p>
  return (
    <ul>
      {
        props.todos.map(todo => (
          <TodoItem 
            todo={todo} 
            onToggle={props.onToggle} 
            onRemove={props.onRemove}
            key={todo.id}
          />
        ))
      }
    </ul>
  )
}

export default TodoList
