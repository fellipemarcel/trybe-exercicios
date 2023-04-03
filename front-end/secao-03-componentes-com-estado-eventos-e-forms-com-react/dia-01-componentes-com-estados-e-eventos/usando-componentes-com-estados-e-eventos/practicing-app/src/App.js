import React from "react";
import './App.css';

class App extends React.Component {
  state = {
    clickCount: 0,
    username: '',
  };

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  };

  increaseClickCount = () => {
    this.setState((currState, _props) => ({ clickCount: currState.clickCount + 1 }));
  };

  render() {
    const { clickCount } = this.state;
    return (
      <div>
        <h2>Contador: { clickCount }</h2>
        <button 
        onClick={ this.increaseClickCount } style={ { backgroundColor: this.getButtonColor(clickCount) }}>Aumentar</button>
      </div>
    )
  }
}

export default App;
