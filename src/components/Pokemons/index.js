import React from 'react';
// import { connect } from "react-redux";
import { PropTypes	 } from "prop-types";
// import { fetchPokemons, changePokemon } from "../../redux-flow/actions/pokemonActions";
import './style.scss';

const Pokemons = ({ pokemons, changePokemon }) => (
	<div className="CcPokemons">
		<ul className="CcPokemons__list">
			{pokemons.map((pokemon) => (
        <li key={pokemon.id} data-url={pokemon.url} onClick={changePokemon(pokemon)}>
          <h3>{pokemon.name}</h3>
        </li>
      ))}
		</ul>
	</div>
);

Pokemons.defaultProps = {
  pokemons: [],
  changePokemon: () => {},
};

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
	changePokemon: PropTypes.func,
};

export default Pokemons;
