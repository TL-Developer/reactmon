import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.scss'

const Header = ({slogan}) => (
  <header className="CcHeader">
    <ul className="list">
      <li route="/">Home</li>
      <li route="/about">About</li>
      <li>
        <a href="https://github.com/TL-Developer/PokeES6" target="_black">Github</a>
      </li>
    </ul>
    <div className="app-title">
      <h3>{slogan}</h3>
    </div>
  </header>
);

Header.proptypes = {
  slogan: PropTypes.string.isRequired
}

export default Header;
