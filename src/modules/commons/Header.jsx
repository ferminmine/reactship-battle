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
  }
};

class Header extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.headerContainer}>
        <img src='/imgs/reactship.png' className={classes.headerImage} />
      </div>
    );
  };
}

export default withStyles(styles)(Header);
