import React from 'react';
import { mount } from 'enzyme';
import Play from '../../modules/play/Play';
import { Provider } from 'react-redux';
import store, { history } from '../../store/Store';
import { ConnectedRouter } from 'connected-react-router';
import renderer from 'react-test-renderer';

describe('Play Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
          <Play history={history} />
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Play history={history}/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
