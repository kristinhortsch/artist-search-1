import React from 'react';
import renderer from 'react-test-renderer';
import Search  from './Search';

jest.mock('../../services/artistsAndWorks.js');

describe('Search', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Search />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});