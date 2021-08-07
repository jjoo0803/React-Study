import './TodoTemplate.scss';

import TodoTitle from './TodoTitle'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'


function TodoTemplate() {
  return (
    <div className="todo-template">
      <TodoTitle />
      <TodoInsert />
      <TodoList />
    </div>
  )
}
export default TodoTemplate;
