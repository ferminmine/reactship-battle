import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './BoardStyles';
import PropTypes from 'prop-types';
import positionValidator from '../../utils/PositionValidator';
import pointHasAShip from '../../utils/PointHasAShip';

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
    const { classes, type } = this.props;
    const { board } = this.state;
    return (
      <div className={classes.boardContainer}>
        {board.map((row, column) =>
          row.map((land, row) => {
            const itHasAShip =
              (type === 'defensive' || type === 'shipPlacer') && this.itHasAShip(column, row)
                ? 'shipInWater'
                : '';
            return (
              <div
                className={`${classes.land} ${classes[land]} ${classes[itHasAShip]}`}
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
