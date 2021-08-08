import React from 'react'; 
import './TodoList.scss'
import TodoListItem from './TodoListItem'

function TodoList ({todos}) {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.idx}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList;