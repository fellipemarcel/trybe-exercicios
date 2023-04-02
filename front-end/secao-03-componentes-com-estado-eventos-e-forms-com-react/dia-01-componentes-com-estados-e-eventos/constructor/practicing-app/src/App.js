import React, { Component } from 'react';

class App extends Component {
  handleClick = () => console.log(this);

  render() {
    return (
      <>
        <h1>Hello, World!</h1>
        <button onClick={this.handleClick}>Clique</button>
      </>
    )
  }
}

export default App;