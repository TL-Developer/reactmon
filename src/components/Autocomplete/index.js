import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({ handleSearch, isDisabled }) => (
  <div className="auto-complete">
    <input
      type="search"
      placeholder="Seek your pokemon"
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
);

Autocomplete.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Autocomplete;
