import React from 'react';
import PropTypes from 'prop-types';

function Song({ song }) {
  const { title } = song;
  return (
    <h2>{title}</h2>
  );
}

Song.propTypes = { 
  song: PropTypes.object.isRequired
};

export default Song;
