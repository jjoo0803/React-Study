
import React from 'react';
// import { GrAdd } from 'react-icons/gr'
import './TodoInsert.scss'

function TodoInsert() {

  const handleBtnClick = () => {
  }

  const handleSubmit = (e) => {
    e.preventDefault() // submit 하는 경우 새로고침 방지
  }

  return (
    <form className="todo-insert" onSubmit={handleSubmit}>
      <input
        placeholder="add a new task"
        // onChange={this.handleChange}
      />
      <button
        type="submit"
        onClick={handleBtnClick}
      >
        add
      </button>
    </form>
  )
}

export default TodoInsert;
