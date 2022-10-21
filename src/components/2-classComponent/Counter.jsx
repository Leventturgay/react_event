import  { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:props.count|| 0,
    }
    // Binding metodu
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({
      count : this.state.count + 1
    });
  }
  decrement = () => {
    this.setState({
      count : this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container text-center mt-4">
      <h1> ClassFull Component </h1>
      <h2 className='display-4 text-danger'>Count:{this.state.count} </h2>
      <button onClick={this.increment} className="btn btn-success">Increment</button>
      <button onClick={this.decrement} className="btn btn-danger">Decrement</button>
    </div>
    )
  }
}

export default Counter;
