import { FETCH_POKEMONS } from "../actions/types";

const initialState = [
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
]

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return [...action.payload]

    default:
      return state;
  }
}
