import React from 'react'
import { Todo } from '../reducers/todoReducer'


type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const handleToggle = () => props.onToggle(props.todo.id);
  const handleRemove = () => props.onRemove(props.todo.id);

  return (
    <li>
      <span onClick={handleToggle} style={{
        textDecoration: props.todo.done ? 'line-through' : 'none'
      }}>
        {props.todo.text}
      </span>
      <span onClick={handleRemove} style={{
        color: 'red', marginLeft: '10px'
      }}>
        (DELETE❌)
      </span>
    </li>
    
  )
}

export default TodoItem
