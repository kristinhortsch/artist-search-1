import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../../services/artistsAndWorks';
import Artist from '../artist/Artist';
import styles from '../App.css';
import 'normalize-css';

class Search extends PureComponent {
  state = {
    artists: [], 
    artist: '',
    offset: 0,
    page: 1,
    count: null,
    paging: null
  }

  increment = () => {
    this.setState(state => ({ offset: state.offset + 10 }));
    this.setState(state => ({ page: state.page + 1 }));
  }

  decrement = () => {
    this.setState(state => ({ offset: state.offset - 10 }));
  }

  handleClick = () => {
    const { artist, offset } = this.state;
    getArtists(artist, offset)
      .then(response => {
        this.setState({ count: response.count });
        this.setState({ artists: response.results });
        this.setState({ paging: true });
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if(prevState.offset !== this.state.offset) {
      const { artist, offset } = this.state;
      getArtists(artist, offset)
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
    const totalPages = Math.ceil(this.state.count / 10);
    const { artist } = this.state;
    const listOfArtists = this.state.artists.map(artist => {
      return <Link className={styles.link} to={`/artist/${artist.name}/${artist.id}`} key={artist.id}><li><Artist artist={artist}/></li></Link> ;
    });
    
    return (
      <Fragment>
        <div className={styles.header}>
          <h1>Search</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="artist" value={artist} onChange={this.handleSubmit}></input>
            <button onClick={this.handleClick}>Search</button>
          </form>
        </div>
        <div>
          <div className={styles.paging}>
            <button onClick={this.decrement}>Back</button>
            {this.state.paging && <p>{this.state.page} / {totalPages}</p>}
            <button onClick={this.increment}>Forward</button>
          </div>
          <h3>Artists</h3>
          <ul>
            {listOfArtists}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Search;

