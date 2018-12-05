import React, { Component } from 'react';

import Header from './components/Header/'
import Pokemons from './components/Pokemons/';
import Footer from './components/Footer/';
import PokemonDetail from "./components/PokemonDetail/";
import Autocomplete from "./components/Autocomplete";

class App extends Component {
  constructor () {
    super()
    this.state = {
      slogan: '.:: PokeLima ::.',
    }
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }

  render() {
    return (
      <div className="App">
        <Header slogan={this.state.slogan} />

        <div className="row">
          <div className="col-6">
            <Pokemons />
          </div>

          <div className="col-6">
            <div className="row">
              <Autocomplete />
            </div>
            <PokemonDetail title="Pokemon Details" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
