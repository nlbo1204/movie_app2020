import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count : 0 
  }

  // 내부에 function을 만들꺼임...
  add = () => {
    //this.setState({count : 1});
    //this.setState({count : this.state.count + 1});  // 이코드는 state에 의존하고있기때문에 좋은코드는 아님, 하나의 예시
    this.setState(current => ({count : current.count + 1})); // 외부의 상태에 의존하지않는 가장좋은방법
  };

  minus = () => {
    //this.setState({count : -1});
    //this.setState({count : this.state.count - 1});
    this.setState(current => ({count : current.count - 1}));
  };

  render(){
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
