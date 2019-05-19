import React from 'react';
import ParagraphWithTitle from '../commons/ParagraphWithTitle';

const playTextFirstParagraph = `Try to sink the enemy ships. To launch your missiles you must click in the spot you want to shoot in the right board. You can watch the enemy shoots in your left board, along with each ship you have placed and their statuses`;

const PlayText = () => (
  <React.Fragment>
    <ParagraphWithTitle title="It's on!" paragraph={playTextFirstParagraph} />
  </React.Fragment>
);

export default PlayText;
