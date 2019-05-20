import React from 'react';
import { mount } from 'enzyme';
import Header from '../../modules/commons/Header';
import renderer from 'react-test-renderer';

describe('Header Component Test', () => {
  it('renders without crashing', () => {
    mount(<Header />);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
