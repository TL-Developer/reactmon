import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ title, pokemon }) => (
  <div>
    <div className="row"></div>
    { title } <br/>
    { pokemon.name }
  </div>
);

Pokemon.defaultProps = {
  title: '',
  pokemon: {}
}

Pokemon.propTypes = {
  title: PropTypes.string.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
};

export default Pokemon;
