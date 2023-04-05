import React, { Component } from "react";

class Email extends Component {
    render() {
        const { email, handleChange } = this.props;
        return (
            <label>
                Digite o seu e-mail:
                <input 
                type='email' 
                name='email' 
                onChange={ handleChange }
                value={ email }></input>
            </label>
        )
    }
}

export default Email;