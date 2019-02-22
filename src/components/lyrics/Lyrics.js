import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getSongLyrics } from '../../services/artistsAndWorks';

export default class Lyrics extends PureComponent {
  state = {
    lyrics: []
  }
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  componentDidMount() {
    getSongLyrics(this.props.match.params.artist, this.props.match.params.song)
      .then(response => {
        console.log(response);
        this.setState({ lyrics: response.results });
      });
  }
  render() {
    const { lyrics } = this.state;
    return (
      <Fragment>
        <h2>Song Title</h2>
        <p>{lyrics}</p>
      </Fragment>
    );
  }
}

