'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Pokemons from './index';

const pokemons = [
  {
    id: 1,
    name: 'pikachu',
    url: "google.com.br",
  },
  {
    id: 2,
    name: 'bulbasaur',
    url: "google.com.br",
  },
  {
    id: 3,
    name: 'charizard',
    url: "google.com.br",
  },
];

const stories = storiesOf('Pokemons', module);

stories.add('with pokemons', () => (
  <Pokemons
    pokemons={pokemons}
  />
));

stories.add('with pokemons and event', () => (
  <Pokemons
    pokemons={pokemons}
    changePokemon={action('Change Pokemon')}
  />
));
