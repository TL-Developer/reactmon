import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/'
import Pokemons from '../Pokemons/';
import Footer from '../Footer/';
import Pokemon from "../Pokemon/";
import Autocomplete from "../Autocomplete/";
import Pagination from "../Pagination/";

const AppComponent = ({slogan, pokemons, pokemon, handleSearch, changePokemon, isFetching}) => (
  <div className="App">
    <Header slogan={slogan} />

    <div className="row">
      <div className="col-6">
        <h3>Lista de pokemons</h3>
        { !!pokemons.length && <Pokemons pokemons={ pokemons } changePokemon={ changePokemon } /> }
      </div>

      <div className="col-6">
        <div className="row">
          <Autocomplete
            handleSearch={handleSearch}
            isDisabled={isFetching}
          />
        </div>
        {isFetching && <div>Carregando</div>}
        { !!pokemon && <Pokemon title="Pokemon Details" pokemon={ pokemon } /> }
      </div>
    </div>

    <div className="row">
      <Pagination />
    </div>
    <Footer />
  </div>
);

AppComponent.propTypes = {
  slogan: PropTypes.string.isRequired,
  pokemons: PropTypes.array.isRequired,
  pokemon:PropTypes.object,
  handleSearch:PropTypes.func.isRequired,
  changePokemon:PropTypes.func.isRequired,
  isFetching:PropTypes.bool,
};

export default AppComponent;
