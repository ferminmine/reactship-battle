import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import withStyles from 'react-jss';
import ViewsContainer from './ViewsContainer';
import styles from './AppStyles';
import './body.css';
import store, { history } from '../../store/Store';
import Header from './Header';

const App = ({ classes }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={classes.appStyles}>
        <Header />
        <ViewsContainer />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default withStyles(styles)(App);
