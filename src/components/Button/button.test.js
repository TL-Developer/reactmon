'use strict';

import React from 'react';
import * as Adapter from 'enzyme-adapter-react-15';
import { shallow, configure } from 'enzyme';
import Button from './index';

const noop = () => null;

configure({adapter: new Adapter()});

it('Button with prop kind="success" should has class "success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind={'success'}>
      Button Success
    </Button>
  );

  expect(wrapper.hasClass('success')).toBe(true);
});
