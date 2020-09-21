import React from 'react';
import PropTypes from 'prop-types';

export const ItemDetail = ({
  article: { albumArt, albumTitle, releaseYear, artist, price },
}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
      <img
        src={albumArt}
        alt={`${albumTitle} by ${artist} album cover`}
        className='w-full'
      />
      <h2 className='text-font text-center'>
        {albumTitle} by {artist} - ({releaseYear})
      </h2>
      <p className='text-font text-center'>Price: ${price}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  article: PropTypes.object,
};
