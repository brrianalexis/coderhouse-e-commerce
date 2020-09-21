import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '.';

export const Item = ({ albumArt, albumTitle, releaseYear, artist, price }) => {
  return (
    <Link to={`/products/${artist}/${albumTitle}`}>
      <div
        style={{
          width: '30vw',
          textAlign: 'center',
          backgroundColor: '#A8DADC',
        }}
        className='item-container'
        data-testid={`${albumTitle}-container`}
      >
        <p data-testid='artist-title'>{artist}</p>
        <img
          src={albumArt}
          alt={`${albumTitle} album cover by ${artist}`}
          style={{
            border: '2px solid #457B9D',
            margin: '0.5rem 0',
            width: '25vw',
          }}
          className='album-art'
          data-testid='album-art'
        />
        <p data-testid='album-title'>
          {albumTitle} ({releaseYear})
        </p>
        <p data-testid='album-price'>${price}</p>
      </div>
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
