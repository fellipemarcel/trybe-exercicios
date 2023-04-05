import React, { Component } from "react";

class Phone extends Component {
    render() {
        const { phone, handleChange } = this.props;
        return (
            <label>
                Informe o seu telefone:
                <input 
                type='tel' 
                name='phone' 
                onChange={ handleChange } 
                value={ phone }></input>
            </label>
        )
    }
}

export default Phone;