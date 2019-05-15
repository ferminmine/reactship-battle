export default {
  boardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    width: '25%',
    border: '2px solid #899695'
  },
  land: {
    backgroundColor: 'white',
    height: '40px',
    border: '1px solid #9ca7a6',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#dbdbdb',
      transition: '0.4s all'
    }
  }
};
