import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../';

export const ItemList = ({ items }) => {
  return (
    <div className='flex items-center justify-center flex-wrap mb-8'>
      {items.map(item => (
        <Item
          key={item.id}
          artist={item.artist}
          albumTitle={item.albumTitle}
          releaseYear={item.releaseYear}
          albumArt={item.albumArt}
          price={item.price}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};
