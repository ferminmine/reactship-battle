import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { setGameState } from '../game/GameActions';
import { setPlayerName } from '../player/PlayerActions';
import GAME_STATES from '../game/GameStates';
import { nextShipToPlaceSelector } from '../ship/ShipSelectors';
import ShipPlacement from '../ship/ShipPlacement/ShipPlacement';
import withStyles from 'react-jss';
import ShipToPlace from '../ship/ShipPlacement/ShipToPlace';
import PropTypes from 'prop-types';

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
    fontSize: '1.1em',
    cursor: 'pointer'
  },
  disabledButton: {
    backgroundColor: '#b9b9b9',
    pointerEvents: 'none'
  }
};

class Landing extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    game: PropTypes.object.isRequired,
    setGameState: PropTypes.func.isRequired,
    setPlayerName: PropTypes.func.isRequired
  };

  startGame = () => {
    if (this.props.game.state === GAME_STATES.PLAYER_READY) {
      this.props.history.push('/play');
    }
  };

  onChangeName = event => {
    this.props.setPlayerName(event.target.value);
  };

  componentDidUpdate = () => {
    if (
      this.props.player !== '' &&
      this.props.nextShipToPlace === undefined &&
      this.props.game.state !== GAME_STATES.PLAYER_READY
    ) {
      this.props.setGameState(GAME_STATES.PLAYER_READY);
    }
  };

  render = () => {
    const { classes, game } = this.props;
    const buttonState = game.state === GAME_STATES.PLAYER_STARTING ? 'disabledButton' : ''
    return (
      <div className={classes.shipPlacementContainer}>
        <ShipPlacement />
        <div className={classes.optionsContainer}>
          <ShipToPlace />
          <input
            type="text"
            className={classes.nameInput}
            onChange={this.onChangeName}
            placeholder="Enter Your Name"
          />
          <button className={`${classes.startButton} ${classes[buttonState]}`} onClick={this.startGame}>
            {' '}
            START GAME{' '}
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  game: state.game,
  player: state.player,
  nextShipToPlace: nextShipToPlaceSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGameState,
      setPlayerName
    },
    dispatch
  );

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Landing);
