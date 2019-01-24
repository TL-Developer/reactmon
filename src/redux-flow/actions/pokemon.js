import { CHANGE_POKEMON } from "./types";

export const changePokemon = () => dispatch => {
  // fetch('https://pokeapi.co/api/v2/pokemon/?limit=21&offset=0')
  // 	.then((pokemons) => {
  // 		this.setState({pokemons: pokemons});
  // 	});

  dispatch({
    type: CHANGE_POKEMON,
    payload: {
      'id': '1',
      'name': 'pikachuuuu',
      'url': 'http://'
    }
  });
}
