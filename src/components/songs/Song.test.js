import React from 'react';
import renderer from 'react-test-renderer';
import Song from './Song';

describe('Song', () => {
  it('matches a snapshot', () => {
    const song = {
      title: 'em',
      language: 'us',
      disambiguation: 'rap'
    };
    const tree = renderer.create(
      <Song song={song} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
