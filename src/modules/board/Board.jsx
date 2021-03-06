import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './BoardStyles';
import PropTypes from 'prop-types';
import positionValidator from '../../utils/positioning/PositionValidator';
import pointHasAShip from '../../utils/positioning/PointHasAShip';
import { shootExists } from '../../utils/Shooting';
import { checkIfPointIsInShip } from '../../utils/positioning/PointHasAShip';

class Board extends React.Component {
  static propTypes = {
    actionToPerform: PropTypes.func,
    type: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired
  };

  state = {
    // Creates an Empty Matrix representing the Board Game
    board: Array(10)
      .fill()
      .map(() => Array(10).fill('normal'))
  };

  itHasAShip = (column, row) => pointHasAShip(column, row, this.props.ships);

  mouseEntered = ({ column, row }) => {
    // Chunk of code to validate and paint where the ship will be placed in the board
    if (this.props.type === 'shipPlacer' && this.props.nextShipToPlace) {
      const shipSize = this.props.nextShipToPlace.size;
      if (positionValidator(this.props.orientation, shipSize, column, row)) {
        let newStateBoard = [...this.state.board];
        for (let i = 0; i <= shipSize - 1; i++) {
          if (this.props.orientation === 'vertical') {
            newStateBoard[column - i][row] = 'toPlace';
          } else {
            newStateBoard[column][row + i] = 'toPlace';
          }
        }
        this.setState({ newStateBoard });
      }
    }
  };

  mouseLeft = ({ column, row }) => {
    // Chunk of code to validate and unpaint where the ship was going to be placed
    if (this.props.type === 'shipPlacer' && this.props.nextShipToPlace) {
      const shipSize = this.props.nextShipToPlace.size;
      if (positionValidator(this.props.orientation, shipSize, column, row)) {
        let newStateBoard = [...this.state.board];
        for (let i = 0; i <= shipSize - 1; i++) {
          if (this.props.orientation === 'vertical') {
            newStateBoard[column - i][row] = 'normal';
          } else {
            newStateBoard[column][row + i] = 'normal';
          }
        }
        this.setState({ newStateBoard });
      }
    }
  };

  render = () => {
    const { classes, type, ships, shoots } = this.props;
    const { board } = this.state;
    return (
      <div className={classes.boardContainer}>
        {board.map((row, column) =>
          row.map((land, row) => {
            // Chunk of checks for different states of the square. 
            const crossHair = type === 'offensive' ? 'crossHair' : '';
            const itHasAShip =
              (type === 'shipPlacer' || type === 'defensive') && this.itHasAShip(column, row)
                ? 'shipInWater'
                : '';
            const blankShoot =
              type !== 'shipPlacer' && shootExists({ column, row }, shoots)
                ? 'blankShoot'
                : '';
            const hittedShoot =
              type !== 'shipPlacer' &&
              shootExists({ column, row }, shoots) &&
              ships.find(ship => checkIfPointIsInShip(column, row, ship))
                ? 'hittedShoot'
                : '';
            let ship = undefined;
            if (hittedShoot !== '') {
              ship = ships.find(ship => checkIfPointIsInShip(column, row, ship));
            }
            const sunkenShip = ship && ship.currentLife === 0 ? 'sunkenShip' : '';
            return (
              <div
                className={`${classes.land} ${classes[land]} ${classes[itHasAShip]} ${
                  classes[blankShoot]
                } ${classes[hittedShoot]} ${classes[sunkenShip]} ${classes[crossHair]}`}
                key={`${column} ${row}`}
                onMouseEnter={() => this.mouseEntered({ column, row })}
                onMouseLeave={() => this.mouseLeft({ column, row })}
                onClick={() => this.props.actionToPerform({ column, row })}
              />
            );
          })
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  orientation: state.ships.orientationToPlace
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    null
  )
)(Board);
