'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AutoComplete from './index'

const stories = storiesOf('AutoComplete', module)

stories.add('first story', () => (
  <AutoComplete
    isDisabled={false}
    handleSearch={action('Handle Search')} />
))

stories.add('second story', () => (
  <AutoComplete
    isDisabled={true}
    handleSearch={action('Handle Search')} />
))
