import React from 'react';
import Board from '../../board/Board';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { setOrientation, addShip } from '../ShipsActions';
import { removeShipToPlace } from './ShipsToPlaceActions';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { nextShipToPlaceSelector } from '../ShipSelectors';
import positionValidator from '../../../utils/positioning/PositionValidator';
import shipCollapseValidator from '../../../utils/positioning/ShipCollapseValidator';
import { placeCPUShips } from '../../../utils/CPUBehavior';
import styles from './ShipPlacementStyles';

class ShipPlacement extends React.Component {
  static propTypes = {
    orientation: PropTypes.string,
    nextShipToPlace: PropTypes.object,
    setOrientation: PropTypes.func.isRequired,
    addShip: PropTypes.func.isRequired,
    removeShipToPlace: PropTypes.func.isRequired,
    classes: PropTypes.object
  };

  placeShip = ({ column, row }) => {
    const { nextShipToPlace, orientation } = this.props;
    if (nextShipToPlace && positionValidator(orientation, nextShipToPlace.size, column, row)) {
      let shipToCreate = {
        ...nextShipToPlace,
        position: { column, row },
        orientation,
        currentLife: nextShipToPlace.size,
        id: Date.now()
      };
      if (!shipCollapseValidator(shipToCreate, this.props.playerShips)) {
        this.props.addShip(shipToCreate, 'HUMAN');
        this.props.removeShipToPlace();
      } else {
        alert('Collapsing!');
      }
    }
  };

  changeOrientation = event => {
    let newOrientation = this.props.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    this.props.setOrientation(newOrientation);
  };

  componentDidMount = () => {
    placeCPUShips([ ...this.props.totalShipsToPlace], this.props.addShip)
  };

  render = () => {
    const { classes } = this.props;  
    return (
      <React.Fragment>
          <div className={classes.buttonContainer}>
            <div className={classes.rotateButton} onClick={this.changeOrientation}> ROTATE SHIP </div>
          </div>
          <div className={classes.boardOutsideContainer}>
            <Board
              type={'shipPlacer'}
              actionToPerform={this.placeShip}
              nextShipToPlace={this.props.nextShipToPlace}
              ships={this.props.playerShips}
            />
          </div>
      </React.Fragment>)
  };
}

const mapStateToProps = state => ({
  orientation: state.ships.orientationToPlace,
  nextShipToPlace: nextShipToPlaceSelector(state),
  playerShips: state.ships.playerShips,
  cpuShips: state.ships.cpuShips,
  totalShipsToPlace: state.ships.shipsToPlace
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setOrientation,
      removeShipToPlace,
      addShip
    },
    dispatch
  );

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(ShipPlacement);
