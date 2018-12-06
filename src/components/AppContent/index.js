import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/'
import Pokemons from '../Pokemons/';
import Footer from '../Footer/';
import PokemonDetail from "../PokemonDetail/";
import Autocomplete from "../Autocomplete/";

const AppComponent = ({slogan, pokemons, pokemon}) => (
  <div className="App">
    <Header slogan={slogan} />

    <div className="row">
      <div className="col-6">
        <h3>Lista de pokemons</h3>
        { !!pokemons.length && <Pokemons pokemons={ pokemons } /> }
      </div>

      <div className="col-6">
        <div className="row">
          <Autocomplete />
        </div>
        { !!pokemon && <PokemonDetail title="Pokemon Details" pokemon={ pokemon } /> }
      </div>
    </div>
    <Footer />
  </div>
);

AppComponent.propTypes = {
  slogan: PropTypes.string.isRequired,
  pokemons: PropTypes.array.isRequired,
  pokemon:PropTypes.object.isRequired
};

export default AppComponent;
