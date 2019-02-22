import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
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
        console.log(response.results);
        this.setState({ songs: response.results });
      });
  }

  render() {
    const { songs } = this.state;
    const listOfSongs = songs.map(song => {
      return <li key={song.id}><Song song={song}/></li>;
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
