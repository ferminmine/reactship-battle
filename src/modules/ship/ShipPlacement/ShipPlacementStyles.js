export default {
  buttonContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  rotateButton: {
    background: 'none',
    border: '3px solid #2f9ad4',
    color: '#2f9ad4',
    fontWeight: '800',
    padding: '4px',
    borderRadius: '6px',
    fontSize: '1.1em',
    cursor: 'pointer',
    marginRight: '22%',
    textAlign: 'center'
  },
  boardOutsideContainer: {
    width: '25%'
  },
  '@media (max-width: 650px)': {
    boardOutsideContainer: {
      width: '90%',
      marginTop: '2em'
    }
  }
};
