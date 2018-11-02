import React, { Component } from 'react';

class ComponentName extends Component {
	constructor (props) {
		super(props);

		this.tate = {
			pokemons: []
		}
	}

	componentWillMount () {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=21&offset=0')
			.then((pokemons) => {
				this.setState({pokemons: pokemons});
			});
	}

	render () {
		return (
			<div>
				<h1>Pokemon</h1>
			</div>
		)
	}
}

export default ComponentName;
