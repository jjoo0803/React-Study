import React, { useRef, useState } from 'react'
import './TodoTemplate.scss';


import TodoTitle from './TodoTitle'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'


function TodoTemplate() {
  /**
   * useRef
   * 1. 특정 DOM 선택 및 조작
   * 2. component 안에서 수정 및 조회 할 수 있는 로컬 변수
   *    - useRef로 관리되는 변수는 설정 후 바로 조회 가능
   *    - ref 안의 값이 변경되어도 컴포넌트는 렌더링이 일어나지 않는다
   */
  const todoIdx = useRef(1)
  const [todos, setTodos] = useState([])

  const addList = (text) => {
    const todo = {
      idx: todoIdx.current,
      content: text,
      checked: false
    }
    console.log(todo)
    setTodos(todos.concat(todo))
    todoIdx.current += 1
  }

  const remove = (idx) => {
    console.log('remove', idx)
    setTodos(todos.filter((todo) => {
      return todo.idx !== idx
    }))
  }

  const toggle = (idx) => {
   setTodos(todos.map((todo) => {
     return todo.idx === idx ? {...todo, checked: !todo.checked} : todo
   }))
  }

  return (
    <div className="todo-template">
      <TodoTitle />
      <TodoInsert addList={addList}/>
      <TodoList todos={todos} onRemove={remove} onToggle={toggle}/>
    </div>
  )
}
export default TodoTemplate;
