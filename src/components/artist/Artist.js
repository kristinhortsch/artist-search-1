import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  const { name } = artist;
  return (
    <h2>{name}</h2>
  );
}

Artist.propTypes = { 
  artist: PropTypes.object.isRequired
};

export default Artist;
