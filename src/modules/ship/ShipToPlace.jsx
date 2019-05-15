import React from 'react';
import withStyles from 'react-jss';
import { mapStateToProps, connect } from 'react-redux'
import { compose } 'reddux';
import PropTypes from 'prop-types';

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
      fontWeight: 300
    }
};

const mapStateToProps = (state) => ({
  shipsToPlace: state.ships.shipsToPlace
});

class ShipToPlace extends React.Component {

    static propTypes = {
      shipsToPlace: PropTypes.
    }

    render = () => {
        const nextShip this.props.shipsToPlace[0]
        const { classes } = this.props;
        return (
          <div className={classes.shipToPlaceContainer}>
            <h1 className={classes.nextShip}> Next Ship to Plase </h1>
            <img src={nextShip.image} />
            <h2 className={classes.shipName}> { nextShip.name } </h2>
          </div>
        )
    }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ShipToPlace);