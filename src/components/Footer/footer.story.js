'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Footer from './index'

const stories = storiesOf('Footer', module)

stories.add('first story', () => (
  <Footer />
))
