import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { getArtistWorks } from '../../services/artistsAndWorks';

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
        console.log('response with songs', response);
        this.setState({ songs: response });
      });
  }

  render() {
    return (
      <Fragment>
        <h2>Songs</h2>
      </Fragment>
    );
  }
}
