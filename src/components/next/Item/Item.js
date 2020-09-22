import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Item = ({ albumArt, albumTitle, releaseYear, artist, price }) => {
  return (
    <Link
      to={`/products/${artist}/${albumTitle}`}
      className='text-font text-center w-1/4 h-1/4 mx-2 my-4 overflow-hidden  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:scale-105'
    >
      <p className='font-semibold'>{artist}</p>
      <img src={albumArt} alt={`${albumTitle} by ${artist} album cover`} />
      <p>
        {albumTitle} ({releaseYear})
      </p>
      <p>${price}</p>
    </Link>
  );
};

Item.propTypes = {
  albumArt: PropTypes.string,
  albumTitle: PropTypes.string,
  releaseYear: PropTypes.number,
  artist: PropTypes.string,
  price: PropTypes.string,
};
