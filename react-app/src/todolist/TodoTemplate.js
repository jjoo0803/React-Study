import React, { useState } from 'react'
import './TodoTemplate.scss';


import TodoTitle from './TodoTitle'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'


function TodoTemplate() {
  const [todos, setTodos] = useState([
    {
      idx: 1,
      content: 'todo========1',
      checked: false
    },
    {
      idx: 2,
      content: 'todo=======2',
      checked: true
    }
  ])

  return (
    <div className="todo-template">
      <TodoTitle />
      <TodoInsert />
      <TodoList todos={todos}/>
    </div>
  )
}
export default TodoTemplate;
