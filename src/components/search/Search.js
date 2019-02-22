import React, { PureComponent, Fragment } from 'react';
import { getArtists } from '../../services/artistsAndWorks';

export default class Search extends PureComponent {
  state = {
    artists: [], 
    artist: ''
  }

  componentDidUpdate() {
    const { artist } = this.state;
    getArtists(artist)
      .then(response => {
        this.setState({ artists: response.results });
      });
  }

  handleSubmit = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artist } = this.state;
    return (
      <Fragment>
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="artist" value={artist} onChange={this.handleSubmit}></input>
        </form>
      </Fragment>
    );
  }
}
