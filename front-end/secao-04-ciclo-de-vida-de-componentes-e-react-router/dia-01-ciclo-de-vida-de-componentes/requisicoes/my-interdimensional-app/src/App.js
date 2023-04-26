import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    characters: [],
  };

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  };

  componentDidMount() {
    this.fetchCharacters();
  };

  render() {
    const { characters } = this.state;
    return (
      <div className='App'>
        <h1>Ricky and Morty Characters:</h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            return (
              <div className='container' key={name}>
                <h1>{name}</h1>
                <img src={image} alt={name}></img>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
