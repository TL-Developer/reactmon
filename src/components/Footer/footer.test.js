'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

it('Should Footer to match snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
