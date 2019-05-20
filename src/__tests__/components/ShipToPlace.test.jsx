import React from 'react';
import { mount } from 'enzyme';
import ShipToPlace from '../../modules/ship/ShipToPlace';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import renderer from 'react-test-renderer';

describe('ShipToPlace Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        {' '}
        <ShipToPlace />{' '}
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ShipToPlace />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
