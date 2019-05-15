import React from 'react';
import withStyles from 'react-jss';

const styles = {
    shipToPlaceContainer: {
      marginBottom: '2em',
      textAlign: 'center'
    },
    nextShip: {
      color: '#2f9ad4'
    },
    shipName: {
      color: '#7b7979',
      fontWeight: 300
    }
}

class ShipToPlace extends React.Component {
    render = () => {
        const { classes } = this.props;
        return (
          <div className={classes.shipToPlaceContainer}>
            <h1 className={classes.nextShip}> Next Ship to Place </h1>
            <img />
            <h2 className={classes.shipName}> Submarine </h2>
          </div>
        )
    }
}

export default withStyles(styles)(ShipToPlace);