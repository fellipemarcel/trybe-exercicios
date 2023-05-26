import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchApi } from "./redux/actions";
import Character from "./components/Character";

class App extends Component {
  
  state = { character: '' };

  render() {

    const { character } = this.state;
    const { dispatch} = this.props;

    return (
      <div>
        <label>
          <input
            type="text"
            onChange={(event) => this.setState({ character: event.target.value })}
            value={ character }
          ></input>
        </label>
        <button
          type="button"
          onClick={() => dispatch(fetchApi(character))}
        >Pesquisar
        </button>
        <Character />
      </div>
    )
  }
}

export default connect()(App);