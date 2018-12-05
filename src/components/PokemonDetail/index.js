import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PokemonDetail = ({ title }) => (
  <div>
    {title}
  </div>
);

PokemonDetail.defaultProps = {
  title: ''
}

PokemonDetail.propTypes = {
  title: PropTypes.string.isRequired
};

export default PokemonDetail;
