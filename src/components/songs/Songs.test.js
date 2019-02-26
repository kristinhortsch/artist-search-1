import React from 'react';
import renderer from 'react-test-renderer';
import Songs  from './Songs';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/artistsAndWorks.js');

describe('Songs', () => {
  it('matches a snapshot', () => {
    const match = {
      params: {
        id: '2344'
      }
    };
    const tree = renderer.create(
      <MemoryRouter><Songs match={match}/></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
