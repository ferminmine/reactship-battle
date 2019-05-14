import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import withStyles from 'react-jss';
import ViewsContainer from './ViewsContainer';
import styles from './AppStyles';
import './body.css'
import store from '../../store/Store';

const App = ({ classes }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={classes.appStyles}>
        <ViewsContainer />
      </div>
    </BrowserRouter>
  </Provider>
);

export default withStyles(styles)(App);
