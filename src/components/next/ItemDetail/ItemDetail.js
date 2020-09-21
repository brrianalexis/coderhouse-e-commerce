import React from 'react';
import PropTypes from 'prop-types';

export const ItemDetail = ({
  article: { albumArt, albumTitle, releaseYear, artist, price },
}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img
        src={albumArt}
        alt={`${albumTitle} by ${artist} album cover`}
        className='w-full'
      />
      <h2 className='text-font'>
        {albumTitle} by {artist} - ({releaseYear})
      </h2>
      <p className='text-font'>Price: ${price}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  article: PropTypes.object,
};
