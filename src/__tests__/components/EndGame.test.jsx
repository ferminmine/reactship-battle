import React from 'react';
import { mount } from 'enzyme';
import EndGame from '../../modules/game/EndGame';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import renderer from 'react-test-renderer';

describe('EndGame Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        {' '}
        <EndGame />{' '}
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <EndGame />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
