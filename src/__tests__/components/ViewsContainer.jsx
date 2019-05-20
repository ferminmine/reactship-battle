import React from 'react';
import { mount } from 'enzyme';
import ViewsContainer from '../../modules/commons/ViewsContainer';
import { Provider } from 'react-redux';
import store, { history } from '../../store/Store';
import { ConnectedRouter } from 'connected-react-router';

describe('ViewsContainer Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ViewsContainer />
        </ConnectedRouter>
      </Provider>
    );
  });
});
