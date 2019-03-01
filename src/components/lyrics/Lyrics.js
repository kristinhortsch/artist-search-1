import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getSongLyrics } from '../../services/artistsAndWorks';
import styles from '../App.css';

export default class Lyrics extends PureComponent {
  state = {
    lyrics: []
  }
  static propTypes = {
    match: PropTypes.object
  }
  componentDidMount() {
    getSongLyrics(this.props.match.params.artist, this.props.match.params.song)
      .then(response => {
        this.setState({ lyrics: response.results });
      });
  }
  render() {
    const { lyrics } = this.state;
    return (
      <Fragment>
        <h3 className={styles.title}>Song Lyrics</h3>
        <p className={styles.lyrics}>{lyrics}</p>
      </Fragment>
    );
  }
}

