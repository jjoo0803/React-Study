
import React , { useState } from 'react';
// import { GrAdd } from 'react-icons/gr'
import './TodoInsert.scss'

function TodoInsert (props) {
  const { addList } = props
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    if (content !== '') {
      addList(content)
      setContent('')
    }
    e.preventDefault() // submit 하는 경우 새로고침 방지
  }

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <form className="todo-insert">
      <input
        placeholder="add a new task"
        onChange={handleChange}
        value={content}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        add
      </button>
    </form>
  )
}

export default TodoInsert;
