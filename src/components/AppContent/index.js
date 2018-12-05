import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/'
import Pokemons from './Pokemons/';
import Footer from './Footer/';
import PokemonDetail from "./PokemonDetail/";
import Autocomplete from "./Autocomplete/";

const AppComponent = () => (
  <div className="App">
    <Header slogan={this.state.slogan} />

    <div className="row">
      <div className="col-6">
        <Pokemons pokemons={ this.state.pokemons } />
      </div>

      <div className="col-6">
        <div className="row">
          <Autocomplete />
        </div>
        <PokemonDetail title="Pokemon Details" pokemon={ this.state.pokemon } />
      </div>
    </div>
    <Footer />
  </div>
);

export default AppComponent;
