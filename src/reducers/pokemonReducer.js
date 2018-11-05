import { FETCH_POKEMONS, NEW_POKEMON } from "../actions/types";

const initialState = {
  pokemons: [
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
  ],
  pokemon: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }

    case NEW_POKEMON:
      debugger
      return {
        ...state,
        pokemon: action.payload
      }

    default:
      return state;
  }
}
