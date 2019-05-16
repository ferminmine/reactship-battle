export default {
  boardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    border: '2px solid #899695'
  },
  land: {
    backgroundColor: 'white',
    height: '40px',
    border: '1px solid #9ca7a6',
    cursor: 'pointer'
  },
  toPlace: {
    backgroundColor: '#dbdbdb',
    transition: '0.2s all'
  },
  shipInWater: {
    backgroundColor: '#899695',
    transition: '0.2s all'
  }
};
