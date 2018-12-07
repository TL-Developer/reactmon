import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({ handleSearch }) => (
  <div className="auto-complete">
    <input
      type="search"
      placeholder="Seek your pokemon"
      onKeyUp={handleSearch}
    />
  </div>
);

Autocomplete.propTypes = {
  handleSearch: PropTypes.func
};

export default Autocomplete;
