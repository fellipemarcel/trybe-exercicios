import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { input: '' };

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    })

  };

  render() {
    const { input } = this.state;
    return (
      <div className='Form__Container'>
        <form className='Form__Content'>
          <h1>{ input }</h1>
          <label>
            Escolha uma opção:
            <select>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </label>
          <label>
            Digite o seu nome:
            <input type='text' onChange={ this.handleInputChange }></input>
          </label>
          <label>
            Digite o seu e-mail:
            <input type='email'></input>
          </label>
        </form>
      </div>
    )
  }
}

export default App;