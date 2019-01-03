'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Header from './index'

const stories = storiesOf('Header', module)

stories.add('first story', () => (
  <Header />
))
