import React from 'react';
import withStyles from 'react-jss';
import styles from './BoardStyles';

class Board extends React.Component {

  render = () => {
    // Creates an Empty Matrix representing the Board Game
    let board = Array(10)
      .fill()
      .map(() => Array(10).fill());
    const { classes } = this.props;

    return (
      <div className={classes.boardContainer}>
        {board.map((row, column) =>
          row.map((land, row) => (
            <div
              className={classes.land}
              key={`${column} ${row}`}
              onClick={() => this.props.actionToPerform({ column, row })}
            />
          ))
        )}
      </div>
    );
  };
}

export default withStyles(styles)(Board);
