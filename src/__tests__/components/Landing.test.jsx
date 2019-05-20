import React from 'react';
import { mount } from 'enzyme';
import Landing from '../../modules/landing/Landing';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import renderer from 'react-test-renderer';

describe('Landing Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Landing />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
