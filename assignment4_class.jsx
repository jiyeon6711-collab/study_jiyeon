import React from 'react';

// Class 컴포넌트 (복잡함 😵)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this); // this 바인딩 필요
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() {
    console.log('마운트됨');
  }
  
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
export default Counter;