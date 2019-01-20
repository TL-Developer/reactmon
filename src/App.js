import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/AppContent'
import { connect } from 'react-redux'

class App extends Component {
  constructor () {
    super()
    this.state = {
      slogan: '.:: PokeLima ::.',
      pokemons: [],
      pokemon: null,
      isFetching: false
    }

    this.uri = {
      pokemons: 'http://www.mocky.io/v2/5c0ad2b12f00005b0013eb35',
      pokemon: 'http://www.mocky.io/v2/5c0aa8a13500006c00a86239'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pokemons } = this.props.state;

    this.setState((state) => ({
      pokemons
    }));
  }

  componentDidMount() {

  }

  componentWillMount () {
    axios.get(this.uri.pokemons)
      .then(res => {
        console.log(this.props)
        this.props.dispatch({type: 'FETCH_POKEMONS', payload: res.data})
        // this.setState({pokemons: res.data});
      })
  }

  handleSearch (e) {
    const keyCode = e.wich || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({pokemon: null, isFetching: true});
      axios.get(this.uri.pokemon)
        .then(res => {
          this.setState({pokemon: res.data});
          this.setState({isFetching: false});
        }).catch(() => {
          this.setState({isFetching: false});
        });
    }
  }

  changePokemon (pokemon) {
    return (e) => {
      this.setState({isFetching: true});
      this.setState({pokemon: null});
      axios.get(this.uri.pokemon)
        .then(res => {
          this.setState({pokemon: res.data});
          this.setState({isFetching: false});
        }).catch(() => {
          this.setState({isFetching: false});
        });
    }
  }

  render() {
    return <AppContent
      {...this.state}
      isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      changePokemon={(pokemon) => this.changePokemon(pokemon)}
      pokemon={this.props.state.pokemon}
    />
  }
}

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(App);
