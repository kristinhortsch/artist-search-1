import React from 'react';
import PropTypes from 'prop-types';

function Song({ song }) {
  const { title, disambiguation, language } = song;
  return (
    <>
      <h2>{title}</h2>
      <p>{disambiguation}</p>
      <p>{language}</p>
    </>
  );
}

Song.propTypes = { 
  song: PropTypes.object.isRequired
};

export default Song;
