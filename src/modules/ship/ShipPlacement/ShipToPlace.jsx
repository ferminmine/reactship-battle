import React from 'react';
import withStyles from 'react-jss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { nextShipToPlaceSelector } from '../ShipSelectors';

const styles = {
    shipToPlaceContainer: {
      marginBottom: '2em',
      textAlign: 'center'
    },
    nextShip: {
      color: '#2f9ad4'
    },
    shipName: {
      color: '#7b7979',
      fontWeight: 300,
      marginTop: 0
    },
    shipImage: {
      height: '5em'
    }
}

class ShipToPlace extends React.Component {
    render = () => {
        const nextShip = this.props.nextShipToPlace && this.props.shipsToPlace[0];
        const { classes } = this.props;
        return (
          <div className={classes.shipToPlaceContainer}>
            <h1 className={classes.nextShip}> 
              { nextShip !== undefined ? 'Next Ship to Place' : 'No more ships available' } 
            </h1>
            { 
              nextShip !== undefined && ( 
              <React.Fragment>
                <img className={classes.shipImage} alt='' src={nextShip && nextShip.image} />
                <h2 className={classes.shipName}> {nextShip && nextShip.name} </h2>
              </React.Fragment>
              )}
          </div>
        )
    }
}

const mapStateToProps = state => ({
  shipsToPlace: state.ships.shipsToPlace,
  nextShipToPlace: nextShipToPlaceSelector(state)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ShipToPlace);