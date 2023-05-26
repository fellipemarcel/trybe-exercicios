import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreator from "./redux/actions";
import { clickActionCreator } from "./redux/actions";

class App extends Component {
  render() {
    const { dispatch, countState, countClicks } = this.props;
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => {
          dispatch(actionCreator(1),
            dispatch(clickActionCreator(1))
          )
        }}>Incrementar 1</button>
        <button onClick={() => {
          dispatch(actionCreator(5),
            dispatch(clickActionCreator(1))
          )
        }}>Incrementar 5</button>
        <h3>Número de cliques: {countClicks}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  countClicks: state.counterReducer.clicks,
})

export default connect(mapStateToProps)(App);
