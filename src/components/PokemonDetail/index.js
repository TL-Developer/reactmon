import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PokemonDetail = ({ title, pokemon }) => (
  <div>
    { title }
  </div>
);

PokemonDetail.defaultProps = {
  title: '',
  pokemon: {}
}

PokemonDetail.propTypes = {
  title: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetail;
