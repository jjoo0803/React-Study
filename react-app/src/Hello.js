import { Component } from 'react';

 class Hello extends Component {
  render () {
    return (
      <div>
        Hello.js
        <button 
          onClick={this.clickTestBtn}
        >
          TEST
        </button>
        <div>
          {this.props.person[0].name}
        </div>
      </div>
    )
  }

  constructor (props) {
    super(props)
    console.log('Hello.js constructor')
    console.log(props)
  }
  clickTestBtn () {
    console.log('button click')
  }
  componentDidMount () {
    // 컴포넌트가 마운트된 직후
    // 데이터 구독하기 좋은 시점
    // 네트워크 요청 보내는 시점
    console.log('Hello.js mount')
  }
 }

 export default Hello