import React from 'react';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';

function Artists({ artists }) {
  const { listOfArtists } = artists;
  return (
    
  );
}

Artists.propTypes = { 
  artists: PropTypes.array.isRequired
};

export default withPaging(Artists);

