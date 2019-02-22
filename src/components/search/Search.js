import React, { PureComponent, Fragment } from 'react';
import { getArtists } from '../../services/artistsAndWorks';
import Artist from '../artist/Artist';

export default class Search extends PureComponent {
  state = {
    artists: [], 
    artist: ''
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.artist, this.state.artist, prevState.artist !== this.state.artist);
    if(prevState.artist !== this.state.artist) {
      const { artist } = this.state;
      getArtists(artist)
        .then(response => {
          console.log(response);
          this.setState({ artists: response.results });
        });
 
    }


  }

  handleSubmit = ({ target }) => {
    event.preventDefault();
    this.setState({ [target.name]: target.value });
  }

  handleClick = () => {
    const { artist } = this.state;
    console.log('thisssss', artist.id);
  }

  render() {
    const { artist } = this.state;
    const listOfArtists = this.state.artists.map(artist => {
      return <button onClick={this.handleClick} key={artist.id}><li><Artist artist={artist}/></li></button> ;
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
