'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div>
    {story()}
  </div>
));

stories.add('button success', () => (
  <Button kind="success" onClick={action('success')}>
    Botão
  </Button>
))

stories.add('button danger', () => (
  <Button kind="danger" onClick={action('danger')}>
    Botão
  </Button>
))
