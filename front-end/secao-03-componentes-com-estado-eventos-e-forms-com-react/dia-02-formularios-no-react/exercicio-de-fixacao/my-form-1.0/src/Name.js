import React, { Component } from 'react';

class Name extends Component {
    render() {
        const { name, handleChange } = this.props;
    
        return (
            <label>
                Digite o seu nome:
                <input 
                type='text' 
                name='name' 
                onChange={ handleChange }
                value={ name }></input>
            </label>
        )
    }
}

export default Name;