import React from 'react';
import withStyles from 'react-jss';

const styles = {
  instructionsContainer: {
    marginLeft: '20%',
    marginRight: '20%'
  },
  instructionsParagraph: {
    color: '#5c5c5c',
    fontWeight: 300,
    fontSize: '1.1em',
    marginTop: '1em'
  },
  paragraphTitle: {
    fontSize: '1.15em',
    fontWeight: 500,
    marginBottom: '0.3em',
    color: '#5288bb'
  }
};

const ParagraphWithTitle = ({ classes, title, paragraph }) => (
  <div className={classes.instructionsContainer}>
    <div className={classes.instructionsParagraph}>
      <div className={classes.paragraphTitle}> { title } </div>
        {paragraph}
    </div>
  </div>
);

export default withStyles(styles)(ParagraphWithTitle);
