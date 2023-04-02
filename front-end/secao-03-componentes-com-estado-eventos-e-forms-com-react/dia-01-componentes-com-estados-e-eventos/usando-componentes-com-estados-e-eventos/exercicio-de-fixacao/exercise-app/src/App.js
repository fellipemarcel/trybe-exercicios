import React, { Component } from 'react';

class App extends Component {
  state = {
    countOne: 0,
    countTwo: 0,
    countThree: 0,
  };

  increaseCountOne = () => {
    this.setState((prevState, _props) => ({ countOne: prevState.countOne + 1 }))
  };
  increaseCountTwo = () => {
    this.setState((prevState, _props) => ({ countTwo: prevState.countTwo + 1}))
  };
  increaseCountThree = () => {
    this.setState((prevState, _props) => ({ countThree: prevState.countThree + 1}))
  };

  render() {
    const { countOne, countTwo, countThree } = this.state;
    return (
      <div>
        <h1>Contador do botão 1: { countOne }</h1>
        <h1>Contador do botão 2: { countTwo }</h1>
        <h1>Contador do botão 3: { countThree }</h1>
        <hr></hr>
        <br></br>
        <button onClick={ this.increaseCountOne }>Botão 1</button>
        <button onClick={ this.increaseCountTwo }>Botão 2</button>
        <button onClick={ this.increaseCountThree }>Botão 3</button>
      </div>
    )
  }
}

export default App;