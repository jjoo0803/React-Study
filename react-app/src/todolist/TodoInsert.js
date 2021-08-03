import { Component } from 'react';
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

class TodoInsert extends Component {
  render () {
    return (
      <form className="todo-insert">
        <input placeholder="할 일을 입력하세요" />
        <button>
          <MdAdd />
        </button>
      </form>
    )
  }
}

export default TodoInsert;
