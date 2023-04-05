import React, { Component } from 'react';
import Name from './Name';
import Age from './Age';
import Phone from './Phone';
import Email from './Email';
import Description from './Description';
import Agreement from './Agreement';

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
            <Name 
            value={ this.state.name } 
            handleChange={ this.handleChange }/>
            <Age 
            value={ this.state.age } 
            handleChange={ this.handleChange }/>
            <Phone 
            value={ this.state.phone } 
            handleChange={ this.handleChange }/>
            <Email 
            value={ this.state.email } 
            handleChange={ this.handleChange }/>            
          </fieldset>
            <Description 
            value={ this.state.description } 
            handleChange={ this.handleChange }/>          
            <Agreement 
            value={ this.state.agreement } 
            handleChange={ this.handleChange }/>
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