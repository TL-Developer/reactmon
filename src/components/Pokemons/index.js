import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes	 } from "prop-types";
import { fetchPokemons, changePokemon } from "../../redux-flow/actions/pokemonActions";
import './style.scss';

class Pokemons extends Component {
	constructor (props) {
		super(props);

		// this.onClick = this.changePokemon.bind(this);
	}

	// changePokemon (pokemon) {
	// 	debugger
	// 	// this.props.changePokemon({});
	// }

	componentWillMount () {
		// this.props.fetchPokemons();
	}

	render () {
		// const pokemons = this.props.pokemons.map(pokemon => (
		// 	<li key={pokemon.id} onClick={this.changePokemon}>
		// 		<h3>{pokemon.name}</h3>
		// 	</li>
		// ));
		return (
			<div className="CcPokemons">
				<ul className="CcPokemons__list">
					{this.props.pokemons.map((pokemon) => (
            <li key={pokemon.id} onClick={this.changePokemon}>
              <h3>{pokemon.name}</h3>
            </li>
          ))}
				</ul>
			</div>
		)
	}
}

Pokemons.propTypes = {
	// fetchPokemons: PropTypes.func.isRequired,
	// changePokemon: PropTypes.func.isRequired,
	// pokemons: PropTypes.array.isRequired
}

// const mapStateToProps = state => ({
// 	pokemons: state.data.pokemons
// });

// export default connect(mapStateToProps, { fetchPokemons, changePokemon })(Pokemons);

export default Pokemons;
