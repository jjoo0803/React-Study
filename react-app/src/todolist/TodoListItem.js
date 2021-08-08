import React from 'react'
import './TodoListItem.scss'
import { BiTrash } from 'react-icons/bi'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'


function TodoListItem ({todo}) {
  const { content, checked } = todo
  return (
    <div className="todo-item">
      {checked ? <GrCheckboxSelected size="25" />  : <GrCheckbox size="25" />  }
      {content}
      <BiTrash size="30" />
    </div>
  )
}
export default TodoListItem