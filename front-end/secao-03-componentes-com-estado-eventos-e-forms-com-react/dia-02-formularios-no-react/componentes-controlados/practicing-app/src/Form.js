import React, { Component } from 'react';

class Form extends Component {
    state = {
        nome: '',
    };

    handleNameChange = (event) => {
        this.setState({ nome: event.target.value });
    };

    render() {
        return (
            <div>
                <div className='Form__Content__Container'>
                    <h1>Meu Formulário</h1>
                </div>
                <div className='Form__Container'>
                    <form>
                        <label>
                            Nome:
                            <input type='text' value={this.state.nome} onChange={this.handleNameChange}></input>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;