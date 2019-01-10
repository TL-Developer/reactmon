import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Autocomplete = ({ handleSearch, isDisabled }) => (
  <div className="auto-complete">
    <input
      type="search"
      placeholder="Seek your pokemon"
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />

    <Button kind="success" onClick={() => {}}>
      Pesquisar
    </Button>
  </div>
);

Autocomplete.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Autocomplete;
