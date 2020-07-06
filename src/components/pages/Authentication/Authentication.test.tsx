import React from 'react';
import { shallow } from 'enzyme';
import { Authentication } from './Authentication';

describe('Authentication test', () => {
  const createAuthentication = () => <Authentication location={undefined} />;

  it('renders component properly', () => {
    const wrapper = shallow(createAuthentication());
    expect(wrapper).toBeTruthy();
  });
});
