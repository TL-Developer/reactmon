import React, { Component } from 'react';

import Header from './components/Header/'
import Pokemons from './components/Pokemons/';
import Footer from './components/Footer/';
import PokemonDetail from "./components/PokemonDetail/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-6">
            <Pokemons />
          </div>

          <div className="col-6">
            <PokemonDetail />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
