import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { resetApp } from '../../store/Store';
import GAME_STATES from '../game/GameStates';
import Swal from 'sweetalert2';

class EndGame extends React.Component {
  componentDidMount = () => {
    const { game } = this.props;
    let endGameMessage = {
      showCancelButton: false,
      confirmButtonText: 'I will start again!',
      allowOutsideClick: false
    };
    if (game.winner === 'player') {
      endGameMessage = {
        ...endGameMessage,
        title: 'Victory!',
        text: 'You won the game! Congratulations!',
        type: 'success'
      };
    }
    if (game.state === GAME_STATES.PLAYER_SURRENDERED) {
        endGameMessage = {
          ...endGameMessage,
          title: 'Surrender!',
          text: 'You chose to surrender! Are you up for a rematch?',
          type: 'error'
        };
      }
    if (game.winner === 'CPU') {
      endGameMessage = {
        ...endGameMessage,
        title: 'Defeat!',
        text: 'You lost the game! Are you up for a rematch?',
        type: 'error'
      };
    }
    this.throwEndGameMessage(endGameMessage);
  };

  throwEndGameMessage = async endGameMessage => {
    await Swal.fire(endGameMessage);
    this.resetGame();
  };

  resetGame = () => {
    this.props.resetApp();
    this.props.push('/');
  };

  render = () => {
    return <React.Fragment />;
  };
}

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
      resetApp
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EndGame);
