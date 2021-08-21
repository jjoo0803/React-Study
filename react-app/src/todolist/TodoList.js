import React from 'react'; 
import './TodoList.scss'
import TodoListItem from './TodoListItem'

function TodoList ({todos, onRemove, onToggle}) {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.idx}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default TodoList;