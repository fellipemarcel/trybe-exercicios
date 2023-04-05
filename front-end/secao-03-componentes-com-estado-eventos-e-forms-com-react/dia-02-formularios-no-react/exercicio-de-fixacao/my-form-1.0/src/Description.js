import React, { Component } from "react";

class Description extends Component {
    render() {
        const { description, handleChange } = this.props;
        return (
            <label>
                Fale um pouco sobre você:
                <textarea 
                name='description' 
                onChange={ handleChange }
                value={ description }></textarea>
            </label>
        )
    }
}

export default Description;