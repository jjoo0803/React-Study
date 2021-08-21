import React from 'react'
import './TodoListItem.scss'
import { BiTrash } from 'react-icons/bi'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'


function TodoListItem ({todo, onRemove, onToggle}) {
  const { idx, content, checked } = todo

  return (
    <div className="todo-item">
      <div
        className="check-box" 
        onClick={() => {onToggle(idx)}}
      >
        {checked ? <GrCheckboxSelected size="20" />  : <GrCheckbox size="20" />  }
      </div>
      <div className="todo-item-content">
        {content}
      </div>
      <div className="delete-btn">
        <BiTrash 
          size="25"
          onClick={() => {onRemove(idx)}}
        />
      </div>
    </div>
  )
}
export default TodoListItem