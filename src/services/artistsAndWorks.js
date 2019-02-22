const getArtists = (artist) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=2`, {
    method: 'GET',
    header: {
      origin: null
    }
  })
    .then(response => response.json())
    .then(res => {
      return {
        results: res.artists
      };
    });
};

const getArtistWorks = (id) => {
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

export { getArtists, getArtistWorks };
