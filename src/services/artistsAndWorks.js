const getArtists = (artist, offset) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10&offset=${offset}`, {
    method: 'GET',
    header: {
      origin: null
    }
  })
    .then(response => response.json())
    .then(res => {
      return {
        count: res.count,
        results: res.artists
      };
    });
};

const getArtistWorks = (id) => {
  console.log('clicked');
  return fetch(`https://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`, {
    method: 'GET',
    header: {
      origin: null
    }
  })
    .then(response => response.json())
    .then(res => {
      return {
        results: res.works
      };
    });
};

const getSongLyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
    method: 'GET',
    header: {
      origin: null
    }
  })
    .then(response => response.json())
    .then(res => {
      return {
        results: res.lyrics
      };
    });
};
export { getArtists, getArtistWorks, getSongLyrics };
