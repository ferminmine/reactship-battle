import React from 'react';
import ShipPlacement from '../ship/ShipPlacement';
import withStyles from 'react-jss';
import ShipToPlace from '../ship/ShipToPlace';

const styles = {
  shipPlacementContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em'
  },
  optionsContainer: {
    marginLeft: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameInput: {
    border: '1px solid #b4bdbc',
    borderRadius: 0,
    fontSize: '1.1em',
    padding: '10px',
    textAlign: 'center'
  },
  startButton: {
    marginTop: '2em',
    width: '70%',
    background: 'none',
    border: '3px solid #899695',
    color: '#899695',
    fontWeight: '800',
    padding: '10px',
    borderRadius: '6px',
    fontSize: '1.1em'
  }
};

class Landing extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.shipPlacementContainer}>
        <ShipPlacement />
        <div className={classes.optionsContainer}>
          <ShipToPlace />
          <input
            type="text"
            className={classes.nameInput}
            onChange={this.onChangeName}
            placeHolder="Enter Your Name"
          />
          <button className={classes.startButton}> START GAME </button>
        </div>
      </div>
    );
  };
}
export default withStyles(styles)(Landing);
