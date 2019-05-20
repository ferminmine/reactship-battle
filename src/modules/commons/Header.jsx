import React from 'react';
import withStyles from 'react-jss';

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  headerImage: {
    height: '13em',
    width: '60%'
  },
  '@media (max-width: 650px)': {
    headerImage: {
      width: '100%'
    }
  }
};

class Header extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.headerContainer}>
        <img src="/imgs/reactship.png" alt="App Header" className={classes.headerImage} />
      </div>
    );
  };
}

export default withStyles(styles)(Header);
