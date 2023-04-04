import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    age: 0,
    phone: '',
    email: '',
    description: '',
    agreement: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })

  };

  render() {
    return (
      <div className='Form__Container'>
        <form className='Form__Content'>
          <fieldset>
            <legend>Dados pessoais:</legend>
            <label>
              Digite o seu nome:
              <input type='text' name='name' onChange={this.handleChange}></input>
            </label>
            <label>
              Informe a sua idade:
              <input type='number' name='age' onChange={this.handleChange}></input>
            </label>
            <label>
              Informe o seu telefone:
              <input type='tel' name='phone' onChange={this.handleChange}></input>
            </label>
            <label>
              Digite o seu e-mail:
              <input type='email' name='email' onChange={this.handleChange}></input>
            </label>
          </fieldset>
          <label>
            Fale um pouco sobre você:
            <textarea name='description' onChange={this.handleChange}></textarea>
          </label>
          <label>
            Aceita os termos?
            <input type='checkbox' name='agreement' onChange={this.handleChange}></input>
          </label>
          <label>
            Enviar foto:
            <input type='file' accept='image/png, image/jpeg'></input>
          </label>
        </form>
      </div>
    )
  }
}

export default App;