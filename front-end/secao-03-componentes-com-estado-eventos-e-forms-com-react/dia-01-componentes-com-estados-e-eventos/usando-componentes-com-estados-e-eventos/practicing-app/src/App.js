import React from "react";

class App extends React.Component {
  state = {
    clickCount: 0,
    username: '',
  };

  increaseClickCount = () => {
    this.setState((currState, _props) => ({ clickCount: currState.clickCount + 1 }))
  };

  changeUserName = (name) => {
    this.setState((currState, _props) => ({ username: currState.username = name }))
  };

  render() {
    const { clickCount, username } = this.state;
    return (
      <div>
        <h1>Nome: { username }</h1>
        <h2>Contador: { clickCount }</h2>
        <button 
        onClick={() => {
          this.increaseClickCount(); 
          this.changeUserName('Fellipe')}}>Aumentar</button>
      </div>
    )
  }
}

export default App;
