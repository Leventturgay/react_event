import  { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    }
  }
  render() {
    return (
      <div>Counter</div>
    )
  }
}

export default Counter
