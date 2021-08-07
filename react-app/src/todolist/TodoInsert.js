import { Component } from 'react';
// import { GrAdd } from 'react-icons/gr'
import './TodoInsert.scss'

class TodoInsert extends Component {
  render () {
    return (
      <form className="todo-insert" onSubmit={this.handleSubmit}>
        <input
          placeholder="add a new task"
          // onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={this.handleBtnClick}
        >
          add
        </button>
      </form>
    )
  }

  constructor (props) {
    super(props)
    // 생성자에서 함수 바인딩 해줘야됨
    // this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    }
  }

  handleBtnClick = () => {

  }
  handleChange (e) {
    // console.log('val: ', e.target.value)
    // e.preventDefault()
    // this.setState({
    //   value: e.target.value
    // })
  }

  handleSubmit = (e) => {
    // 생성자 함수에서 바인딩 하지 않는 경우 화살표 함수로 구현 (자동으로 바인딩 됨)
    e.preventDefault() // submit 하는 경우 새로고침 방지
  }
}

export default TodoInsert;
