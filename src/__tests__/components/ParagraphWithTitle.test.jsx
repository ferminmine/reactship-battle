import React from 'react';
import { mount } from 'enzyme';
import ParagraphWithTitle from '../../modules/commons/ParagraphWithTitle';
import renderer from 'react-test-renderer';

describe('ParagraphWithTitle Component Test', () => {

  it('matches the snapshot', () => {
    const tree = renderer.create(<ParagraphWithTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    mount(<ParagraphWithTitle />);
  });
});
