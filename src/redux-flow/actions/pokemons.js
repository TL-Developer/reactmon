import { FETCH_POKEMONS } from "./types";

export const fetchPokemons = () => dispatch => {
  // fetch('https://pokeapi.co/api/v2/pokemon/?limit=21&offset=0')
  // 	.then((pokemons) => {
  // 		this.setState({pokemons: pokemons});
  // 	});

  dispatch({
    type: FETCH_POKEMONS,
    payload: [
      {
        'id': '1',
        'name': 'pikachu',
        'url': 'http://'
      },
      {
        'id': '2',
        'name': 'bulbasaur',
        'url': 'http://'
      },
      {
        'id': '3',
        'name': 'bulbasaur',
        'url': 'http://'
      },
      {
        'id': '4',
        'name': 'bulbasaur',
        'url': 'http://'
      }
    ]
  });
}
