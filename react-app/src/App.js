import React, { Component } from 'react'; 
// import logo from './logo.svg';
import './App.css';
// import Hello  from './Hello.js';

import TodoTemplate from './todolist/TodoTemplate.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          test
          <Hello
            person={this.state.personData}
          />
        </div> */}
        <TodoTemplate></TodoTemplate>
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      personData: [
        {
          name : 'Alex',
          age: 20,
          phone : '010-0000-0000',
        },
        {
          name : 'Peter',
          age: 14,
          phone : '010-0000-0001',
        },
        {
          name : 'Hann',
          age: 50,
          phone : '010-0000-0002',
        }
      ]
    }
    console.log('App.js constructor')
  }
  componentDidMount () {
    // 컴포넌트가 마운트된 직후
    // 데이터 구독하기 좋은 시점
    // 네트워크 요청 보내는 시점
    console.log('App.js mount')
  }
}
export default App;