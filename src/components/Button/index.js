'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, kind, onClick }) => (
  <button className={`button ${kind}`} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  kind: ''
}

Button.propTypes = {
  kind: PropTypes.oneOf(['success', 'danger']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
