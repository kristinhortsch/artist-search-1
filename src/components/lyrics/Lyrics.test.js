import React from 'react';
import renderer from 'react-test-renderer';
import Lyrics  from './Lyrics';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/artistsAndWorks.js');

describe('Lyrics', () => {
  it('matches a snapshot', () => {
    const match = {
      params: {
        artist: 'artist',
        song: '2344'   
      }
    };
    const tree = renderer.create(
      <MemoryRouter><Lyrics match={match}/></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
