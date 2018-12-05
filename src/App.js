import React, { Component } from 'react';

import AppContent from './components/AppContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      slogan: '.:: PokeLima ::.',
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
        },
        {
          'id': '3',
          'name': 'squartle',
          'url': 'http://'
        },
        {
          'id': '4',
          'name': 'charizard',
          'url': 'http://'
        }
      ],
      pokemon: {
        'id': '1',
        'name': 'pikachu',
        'url': 'http://'
      }
    }
  }

  render() {
    return <AppContent />
  }
}

export default App;
