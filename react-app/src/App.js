import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        </header>
        <div>
          test
        </div>
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
  }
}
export default App;