import { CHANGE_POKEMON } from "../actions/types";

const initialState = {
  'id': '1',
  'name': 'pikachu',
  'url': 'http://'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      }

    default:
      return state;
  }
}
