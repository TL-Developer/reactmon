import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/AppContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      slogan: '.:: PokeLima ::.',
      pokemons: [],
      pokemon: null
    }
  }

  componentWillMount () {
    axios.get(`http://www.mocky.io/v2/5c0ad2b12f00005b0013eb35`)
      .then(res => {
        this.setState({pokemons: res.data});
      })
  }

  handleSearch (e) {
    const keyCode = e.wich || e.keyCode;
    const ENTER = 13;

    this.setState({lading: true});
    if (keyCode === ENTER) {
      axios.get(`http://www.mocky.io/v2/5c0aa8a13500006c00a86239`)
        .then(res => {
          this.setState({pokemon: res.data});
        })
    }
  }

  render() {
    return <AppContent
      slogan={ this.state.slogan }
      pokemons={ this.state.pokemons }
      pokemon={ this.state.pokemon }
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default App;
