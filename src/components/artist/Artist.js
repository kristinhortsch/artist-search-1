import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  const { name, country, disambiguation } = artist;
  return (
    <>
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{disambiguation}</p>
    </>
  );
}

Artist.propTypes = { 
  artist: PropTypes.object.isRequired
};

export default Artist;
