import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getArtistWorks } from '../../services/artistsAndWorks';
import Song from './Song';

export default class Songs extends PureComponent {
  state = {
    songs: []
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    getArtistWorks(this.props.match.params.id)
      .then(response => {
        this.setState({ songs: response.results });
      });
  }

  render() {
    const { songs } = this.state;
    const listOfSongs = songs.map(song => {
      const songTitle = song.title;
      songTitle.replace(/\s+/g, '-').toLowerCase();
      return <Link to={`/songs/${this.props.match.params.name}/${songTitle}`} key={song.id}><li><Song song={song}/></li></Link>;
    });
    
    return (
      <Fragment>
        <h2>Songs</h2>
        <div>
          <h3>songs</h3>
          <ul>
            {listOfSongs}
          </ul>
        </div>
      </Fragment>
    );
  }
}
