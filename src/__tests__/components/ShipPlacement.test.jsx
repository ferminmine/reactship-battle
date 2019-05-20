import React from 'react';
import { mount } from 'enzyme';
import ShipPlacement from '../../modules/ship/ShipPlacement/ShipPlacement';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import renderer from 'react-test-renderer';

describe('ShipPlacement Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        {' '}
        <ShipPlacement />{' '}
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ShipPlacement />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
