import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import styles from './PlayStyles';
import { setGameState, setWinner } from '../game/GameActions';
import { substractLifePointToShip } from '../ship/ShipsActions';
import { addShoot } from '../shoots/ShootsActions';
import { addKnownHit, removeKnownHit } from '../shoots/CPUKnownHitsActions';
import GAME_STATES from '../game/GameStates';
import PropTypes from 'prop-types';

import Board from '../board/Board';
import { shoot } from '../../utils/Shooting';
import { shootPlayer } from '../../utils/CPUBehavior';
import EndGame from '../game/EndGame';

import PlayText from './PlayText';

class Play extends React.Component {
  static propTypes = {
    playerShips: PropTypes.array,
    cpuShips: PropTypes.array
  };

  componentDidMount = () => {
    console.log('mounting');
    if (this.props.game.state === GAME_STATES.PLAYER_READY) {
      this.props.setGameState(GAME_STATES.PLAYER_PLAYING);
    } else {
      this.props.history.push('/');
    }
  };

  checkForWinner = (playerShips, cpuShips) => {
    if (!playerShips.some(ship => ship.currentLife > 0)) {
      return 'CPU';
    } else if (!cpuShips.some(ship => ship.currentLife > 0)) {
      return 'player';
    }
  };

  surrender = () => {
    this.props.setGameState(GAME_STATES.PLAYER_SURRENDERED);
  };

  defineWinner = winner => {
    this.props.setGameState(GAME_STATES.GAME_ENDED);
    this.props.setWinner(winner);
  };

  shootToCPU = ({ column, row }) => {
    const {
      addShoot,
      substractLifePointToShip,
      playerShips,
      playerShoots,
      cpuShips,
      cpuShoots,
      addKnownHit,
      removeKnownHit,
      cpuKnownHits
    } = this.props;
    if (
      shoot(
        { column, row },
        playerShoots,
        cpuShips,
        'HUMAN',
        'CPU',
        addShoot,
        substractLifePointToShip
      )
    ) {
      if (this.checkForWinner(playerShips, cpuShips) == 'player') {
        this.defineWinner('player');
      } else {
        this.props.setGameState(GAME_STATES.CPU_PLAYING);
        shootPlayer(
          cpuKnownHits,
          cpuShoots,
          playerShips,
          addShoot,
          substractLifePointToShip,
          addKnownHit,
          removeKnownHit
        );
        this.props.setGameState(GAME_STATES.PLAYER_PLAYING);
        if (this.checkForWinner(playerShips, cpuShips) == 'CPU') {
          this.defineWinner('CPU');
        }
      }
    }
  };

  render = () => {
    const { classes, game, player } = this.props;
    return (
      <React.Fragment>
        <PlayText />
        <div className={classes.boardContainer}>
          <div className={classes.playerBoardContainer}>
            <div className={classes.playerName}> {this.props.player} </div>
            <Board
              type={'defensive'}
              actionToPerform={() => {}}
              ships={this.props.playerShips}
              shoots={this.props.cpuShoots}
            />
          </div>
          <div className={`${classes.playerBoardContainer} ${classes.cpuBoardContainer}`}>
            <div className={classes.playerName}> CPU </div>
            <Board
              type={'offensive'}
              actionToPerform={this.shootToCPU}
              ships={this.props.cpuShips}
              shoots={this.props.playerShoots}
            />
          </div>
        </div>
        <div className={classes.turn}>
          {(game.state === GAME_STATES.PLAYER_PLAYING ||
            game.state === GAME_STATES.CPU_PLAYING) && (
            <div>
              {game.state === GAME_STATES.PLAYER_PLAYING && player}
              {game.state === GAME_STATES.CPU_PLAYING && player} is playing!
            </div>
          )}
          {(game.state === GAME_STATES.GAME_ENDED ||
            game.state === GAME_STATES.PLAYER_SURRENDERED) && <EndGame />}
        </div>
        <div className={classes.centeredButton}>
          <button className={classes.surrenderButton} onClick={this.surrender}>
            {' '}
            SURRENDER{' '}
          </button>
        </div>
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  playerShips: state.ships.playerShips,
  cpuShips: state.ships.cpuShips,
  playerShoots: state.shoots.playerShoots,
  cpuShoots: state.shoots.cpuShoots,
  player: state.player,
  game: state.game,
  cpuKnownHits: state.shoots.cpuKnownHits
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGameState,
      substractLifePointToShip,
      addShoot,
      addKnownHit,
      removeKnownHit,
      setWinner
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
