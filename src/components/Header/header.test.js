'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

it('Should Header to match snapshot', () => {
  const tree = renderer.create(<Header slogan={"Slogan"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
