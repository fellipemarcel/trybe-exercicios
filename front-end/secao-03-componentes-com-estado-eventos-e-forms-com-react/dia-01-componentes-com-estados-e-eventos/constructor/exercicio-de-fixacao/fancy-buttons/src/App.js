import { Component } from "react";

const handleClickFirst = () => {
  console.log('Clicou no primeiro')
};

const handleClickSec = () => {
  console.log('Clicou no segundo')
};

const handleClickThird = () => {
  console.log('Clicou no terceiro')
};

class App extends Component {
  render() {
    return (
      <>
        <button onClick={handleClickFirst}>Clique no primeiro</button>
        <button onClick={handleClickSec}>Clique no segundo</button>
        <button onClick={handleClickThird}>Clique no terceiro</button>
      </>
    )
  }
}

export default App;