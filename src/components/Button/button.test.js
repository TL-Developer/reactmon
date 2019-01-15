'use strict';

import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './index';

Enzyme.configure({ adapter: new Adapter() })

const noop = () => null;

it('Button with prop kind="success" should has class "success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind={'success'}>
      Button Success
    </Button>
  );

  expect(wrapper.hasClass('success')).toBe(true);
});
