import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  const { name, disambiguation } = artist;
  return (
    <Fragment>
      <h2>{name}</h2>
      {disambiguation && <p>Description: {disambiguation}</p>}
    </Fragment>
  );
}

Artist.propTypes = { 
  artist: PropTypes.object.isRequired
};

export default Artist;
