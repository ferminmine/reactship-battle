export default {
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
  },
  '@media (max-width: 650px)': {
    shipPlacementContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
