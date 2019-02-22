const getArtists = (artist) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(res => {
      // eslint-disable-next-line no-console
      console.log('res', res);
      return {
        results: res.artists
      };
    });
};
export { getArtists };
