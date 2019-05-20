import React from 'react';
import { mount } from 'enzyme';
import App from '../../modules/commons/App';
import { Provider } from 'react-redux';
import store from '../../store/Store';

describe('App Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        {' '}
        <App />{' '}
      </Provider>
    );
  });
});
