import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import { setGameState } from '../game/GameActions';
import { substractLifePointToShip } from '../ship/ShipsActions';
import { addShoot } from '../shoots/ShootsActions';
import GAME_STATES from '../game/GameStates';
import PropTypes from 'prop-types';

import Board from '../board/Board';
import whichShipBelongToPoint from '../../utils/positioning/WhichShipBelongToPoint';

const styles = {
  boardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em'
  },
  playerBoardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%'
  },
  playerName: {
    textAlign: 'left',
    fontSize: '1.1em',
    marginBottom: '0.5em',
    color: '#8999b2'
  },
  cpuBoardContainer: {
    marginLeft: '3%'
  }
};

class Play extends React.Component {
  static propTypes = {
    playerShips: PropTypes.array,
    cpuShips: PropTypes.array
  };

  componentDidMount = () => {
    if (this.props.game.state === GAME_STATES.PLAYER_READY) {
      this.props.setGameState(GAME_STATES.PLAYER_PLAYING);
    } else {
      this.props.history.push('/');
    }
  };

  shootIsNotRepeated = ({ column, row }, shoots) =>
    shoots.some(shoot => shoot.column === column && shoot.row === row);

  shoot = ({ column, row }) => {
    if ((!this.shootIsNotRepeated({ column, row }), this.props.playerShoots)) {
      let ship = whichShipBelongToPoint(column, row, this.props.cpuShips);
      if (ship) {
        this.props.substractLifePointToShip(ship.id, 'CPU');
      }
      this.props.addShoot({ column, row }, 'HUMAN');
    }
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.boardContainer}>
        <div className={classes.playerBoardContainer}>
          <div className={classes.playerName}> {this.props.player} </div>
          <Board type={'defensive'} actionToPerform={() => {}} ships={this.props.playerShips} />
        </div>
        <div className={`${classes.playerBoardContainer} ${classes.cpuBoardContainer}`}>
          <div className={classes.playerName}> CPU </div>
          <Board type={'defensive'} actionToPerform={this.shoot} ships={this.props.cpuShips} />
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  playerShips: state.ships.playerShips,
  cpuShips: state.ships.cpuShips,
  playerShoots: state.shoots.playerShoots,
  player: state.player,
  game: state.game
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGameState,
      substractLifePointToShip,
      addShoot
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Play);
