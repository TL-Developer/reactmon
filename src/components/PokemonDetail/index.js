import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetail = ({ title, pokemon }) => (
  <div>
    <div className="row"></div>
    { title } <br/>
    { pokemon.name }
  </div>
);

PokemonDetail.defaultProps = {
  title: '',
  pokemon: {}
}

PokemonDetail.propTypes = {
  title: PropTypes.string.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
};

export default PokemonDetail;
