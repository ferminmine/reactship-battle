import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { setGameState } from '../game/GameActions';
import GAME_STATES from '../game/GameStates';

class Play extends React.Component {

    componentDidMount = () => {
        this.props.setGameState(GAME_STATES.PLAYER_PLAYING);
    }

    render = () => {
        return (
            <div> Estarias Jugando, capo </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setGameState
}, dispatch)

export default compose(
    connect(null, mapDispatchToProps)
)(Play)