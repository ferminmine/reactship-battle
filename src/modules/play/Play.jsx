import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import { setGameState } from '../game/GameActions';
import GAME_STATES from '../game/GameStates';
import PropTypes from 'prop-types';

import Board from '../board/Board';

const styles = {
    boardContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1em'
    },
    playerBoardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
    },
    playerName: {
        textAlign: 'left',
        fontSize: '1.1em',
        marginBottom: '0.5em',
        color: '#8999b2'
    },
    cpuBoardContainer: {
        marginLeft: '3%',
    }
}

class Play extends React.Component {
    
    static propTypes = {
        playerShips: PropTypes.array,
        cpuShips: PropTypes.array
    }

    componentDidMount = () => {
        if (this.props.game.state === GAME_STATES.PLAYER_READY) {
            this.props.setGameState(GAME_STATES.PLAYER_PLAYING);
        } else {
            this.props.history.push('/');
        }
    }

    render = () => {
        const { classes } = this.props;
        return (
            <div className={classes.boardContainer}>
                <div className={classes.playerBoardContainer}>
                    <div className={classes.playerName}> {this.props.player} </div>
                    <Board
                        type={'defensive'}
                        actionToPerform={() => {}}
                        ships={this.props.playerShips}
                    />
                </div>
                <div className={`${classes.playerBoardContainer} ${classes.cpuBoardContainer}`}>
                    <div className={classes.playerName}> CPU </div>
                    <Board
                        type={'attacker'}
                        actionToPerform={() => {}}
                        ships={this.props.cpuShips}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    playerShips: state.ships.playerShips,
    cpuShips: state.ships.cpuShips,
    player: state.player,
    game: state.game
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setGameState
}, dispatch)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Play)