import React from 'react'
import './TodoListItem.scss'
import { BiTrash } from 'react-icons/bi'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'


function TodoListItem ({todo, onRemove, onToggle}) {
  const { idx, content, checked } = todo

  return (
    <div className="todo-item">
      <div onClick={() => {onToggle(idx)}}>
        {checked ? <GrCheckboxSelected size="25" />  : <GrCheckbox size="25" />  }
      </div>
      <div>
        {content}
      </div>
      <BiTrash 
        size="30"
        onClick={() => {onRemove(idx)}}
      />
    </div>
  )
}
export default TodoListItem