export default {
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
  },
  turn: {
    textAlign: 'center',
    marginTop: '1.5em',
    color: '#8999c5',
    fontSize: '1.2em'
  },
  surrenderButton: {
    color: '#2f9ad4',
    border: '3px solid #2f9ad4',
    cursor: 'pointer',
    padding: '4px',
    fontSize: '1.1em',
    background: 'none',
    textAlign: 'center',
    fontWeight: 800,
    borderRadius: '6px',
    marginTop: '1em'
  },
  centeredButton: {
    display: 'flex',
    justifyContent: 'center'
  },
  '@media (max-width: 650px)': {
    boardContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    playerBoardContainer: {
      width: '90%'
    },
    cpuBoardContainer: {
      marginLeft: 0,
      marginTop: '2em'
    },
    playerName: {
      textAlign: 'center'
    }
  }
};
