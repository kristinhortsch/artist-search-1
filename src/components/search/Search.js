import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../../services/artistsAndWorks';
import Artist from '../artist/Artist';

export default class Search extends PureComponent {
  state = {
    artists: [], 
    artist: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.artist !== this.state.artist) {
      const { artist } = this.state;
      getArtists(artist)
        .then(response => {
          this.setState({ artists: response.results });
        });
    }
  }

  handleSubmit = ({ target }) => {
    event.preventDefault();
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artist } = this.state;
    const listOfArtists = this.state.artists.map(artist => {
      return <Link to={`/artist/${artist.id}`} key={artist.id}><li><Artist artist={artist}/></li></Link> ;
    });
    return (
      <Fragment>
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="artist" value={artist} onChange={this.handleSubmit}></input>
        </form>
        <div>
          <h3>Artists</h3>
          <ul>
            {listOfArtists}
          </ul>
        </div>
        
      </Fragment>
    );
  }
}
