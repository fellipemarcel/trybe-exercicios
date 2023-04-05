import React, { Component } from "react";

class Agreement extends Component {
    render() {
        const { agreement, handleChange } = this.props;
        return (
            <label>
                Aceita os termos?
                <input 
                type='checkbox' 
                name='agreement' 
                onChange={ handleChange }
                value={ agreement }></input>
            </label>
        )
    }
}

export default Agreement;