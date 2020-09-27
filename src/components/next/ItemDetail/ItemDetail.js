import React from 'react';
import PropTypes from 'prop-types';

export const ItemDetail = ({
  item: { albumArt, albumTitle, artist, price, description },
}) => {
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg'>
        <img
          src={albumArt}
          alt={`${albumTitle} by ${artist} album cover`}
          className='w-full'
        />
        <p className='pt-2 text-center text-font'>{description}</p>
        <p className='p-2 text-font text-center'>Price: ${price}</p>
      </div>
    </>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};
