import React, { Component } from 'react';
import './style.scss';

class Pokemons extends Component {
	constructor (props) {
		super(props);

		this.state = {
			pokemons: []
		}
	}

	componentWillMount () {
		// fetch('https://pokeapi.co/api/v2/pokemon/?limit=21&offset=0')
		// 	.then((pokemons) => {
		// 		this.setState({pokemons: pokemons});
		// 	});
		this.setState({ pokemons: [
			{
				'id': '1',
				'name': 'pikachu',
				'url': 'http://'
			},
			{
				'id': '2',
				'name': 'bulbasaur',
				'url': 'http://'
			}
		]});
	}

	render () {
		const pokemons = this.state.pokemons.map(pokemon => (
			<li key={pokemon.id}>
				<h3>{pokemon.name}</h3>
			</li>
		));
		return (
			<div className="CcPokemons">
				<h3>Lista de pokemons</h3>

				<ul className="CcPokemons__list">
					{pokemons}
				</ul>
			</div>
		)
	}
}

export default Pokemons;
