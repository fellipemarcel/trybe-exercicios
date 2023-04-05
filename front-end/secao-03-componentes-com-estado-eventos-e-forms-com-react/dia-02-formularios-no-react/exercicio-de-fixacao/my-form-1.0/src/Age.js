import React, { Component } from "react";

class Age extends Component {
    render() {
        const { age, handleChange } = this.props;
        return (
            <label>
                Informe a sua idade:
                <input 
                type='number' 
                name='age' 
                onChange={ handleChange } 
                value={ age }></input>
            </label>
        )
    }
}

export default Age;