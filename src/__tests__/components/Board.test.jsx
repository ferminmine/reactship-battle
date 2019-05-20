import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../modules/board/Board';

describe('Board Component Test', () => {
  it('renders without crashing', () => {
    shallow(<Board />);
  });
});
