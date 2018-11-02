import React, { Component } from 'react';

import Header from './components/Header'
import Pokemons from './components/Pokemons';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <Header />
        <Pokemons />
        <Footer />
      </div>
    );
  }
}

export default App;
