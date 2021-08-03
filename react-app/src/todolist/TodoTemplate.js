import { Component } from 'react'; 
import './TodoTemplate.scss';

import TodoTitle from './TodoTitle'
import TodoInsert from './TodoInsert'

class TodoTemplate extends Component {
  render () {
    return (
      <div className="todo-template">
        <TodoTitle />
        <TodoInsert />
      </div>
    )
  }
}
export default TodoTemplate;
