import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './Artist';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const artist = {
      name: 'em',
      country: 'us',
      disambiguation: 'rap'
    
    };
    const tree = renderer.create(
      <Artist artist={artist} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
