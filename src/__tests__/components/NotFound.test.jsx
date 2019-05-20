import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../modules/commons/NotFound';
import { Provider } from 'react-redux';
import store from '../../store/Store';

describe('NotFound Component Test', () => {
  it('renders without crashing', () => {
    mount(<NotFound />);
  });
});
