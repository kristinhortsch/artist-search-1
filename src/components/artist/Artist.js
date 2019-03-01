import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  const { name } = artist;
  return (
    <Fragment>
      <h2>{name}</h2>
    </Fragment>
  );
}

Artist.propTypes = { 
  artist: PropTypes.object.isRequired
};

export default Artist;
