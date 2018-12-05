import React, { Component } from 'react'
import './style.scss'

export default class Header extends Component {
  render() {
    return (
      <header className="CcHeader">
        <ul className="list">
          <li route="/">Home</li>
          <li route="/about">About</li>
          <li>
            <a href="https://github.com/TL-Developer/PokeES6" target="_black">Github</a>
          </li>
        </ul>
        <div className="app-title">
          <h3>{this.props.slogan}</h3>
        </div>
      </header>
    )
  }
}
