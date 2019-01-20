'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Pokemon from './index';

const pokemon = {
  id: 1,
  name: 'pikachu',
  url: "google.com.br",
};

const stories = storiesOf('Pokemon detail', module);

stories
.add('with title', () => (
  <Pokemon title="Any Title" />
))

.add('with pokemon', () => (
  <Pokemon title="Any Title" pokemon={pokemon}/>
));

