import React, { Component } from "react";
import { connect } from "react-redux";

class Character extends Component {
    render() {
        const { character, error, isFetching } = this.props;
        if (!isFetching && character) {
            return (
                <div>
                    <h1>Name</h1>
                    <ul>
                        <li>{character.name}</li>
                    </ul>
                        <h1>Aliases:</h1>
                        <ul>
                            {character.aliases.map((alias, index) => (
                                <li key={index}>{alias}</li>
                            ))}
                        </ul>
                </div>
            )
        }
        if (error) return <p>{error}</p>;
    }
}

const mapStateToProps = (state) => ({
    character: state.character,
    error: state.error,
    isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Character);