import React from 'react';
import ParagraphWithTitle from '../commons/ParagraphWithTitle';

const instructionsFirstParagraph = `It is the good and old Battleship game that you probably know, but implemented for the browser
so you can play anytime you want against our well polished AI who will be delighted to play
against you. Be warned though: it will not give you any mercy.`;

const instructionsSecondParagraph = (
  <React.Fragment>
    If you have not played Battleship before, then you can read the rules{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://en.wikipedia.org/wiki/Battleship_(game)"
    >
      here
    </a>
    .
  </React.Fragment>
);

const InstructionsText = () => (
  <React.Fragment>
    <ParagraphWithTitle title="What Is Reactship Battle?" paragraph={instructionsFirstParagraph} />
    <ParagraphWithTitle paragraph={instructionsSecondParagraph} />
  </React.Fragment>
);

export default InstructionsText;
