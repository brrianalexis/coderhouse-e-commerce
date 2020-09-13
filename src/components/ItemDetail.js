import React from 'react';
import PropTypes from 'prop-types';

export const ItemDetail = ({
  article: { albumArt, albumTitle, releaseYear, artist, price },
}) => {
  return (
    <>
      <img
        src={albumArt}
        alt={`${albumTitle} by ${artist} album cover`}
        style={{
          border: '2px solid #457B9D',
          width: '30vw',
        }}
        className='album-art'
      />
      <h2 className='item-detail-title'>
        {albumTitle} by {artist} - ({releaseYear})
      </h2>
      <p>Price: ${price}</p>
    </>
  );
};

ItemDetail.propTypes = {
  article: PropTypes.object,
};
