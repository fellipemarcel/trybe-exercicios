import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogImage } from "./redux/actions";
import './App.css';

class App extends Component {
  render() {
    const { dispatch, imageURL, isFetching } = this.props;
    if (isFetching) return <p>Carregando...</p>;
    return (
      <div>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo doguinho
        </button>
        {
          imageURL &&
          <img 
            src={ imageURL }
            alt="Imagem de um dog aleatório"
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);