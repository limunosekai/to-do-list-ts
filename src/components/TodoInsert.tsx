import React, { FormEvent, useState } from 'react'

type TodoInsertProps = {
  onInsert: (text: string) => void;
}

function TodoInsert(props: TodoInsertProps) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onInsert(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder="해야할 일을 입력하세요~😀"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInsert
