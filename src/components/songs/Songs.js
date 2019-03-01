import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getArtistWorks } from '../../services/artistsAndWorks';
import Song from './Song';
import styles from '../App.css';

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
      return <Link className={styles.link} to={`/songs/${this.props.match.params.name}/${songTitle}`} key={song.id}><li><Song song={song}/></li></Link>;
    });
    
    return (
      <Fragment>
        <h3 className={styles.title}>Songs</h3>
        <div>
          <ul>
            {listOfSongs}
          </ul>
        </div>
      </Fragment>
    );
  }
}
