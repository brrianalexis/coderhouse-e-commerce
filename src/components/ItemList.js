import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './';

export const ItemList = ({ articles }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      data-testid='item-list-container'
    >
      {articles.map(article => (
        <Item
          artist={article.artist}
          albumArt={article.albumArt}
          albumTitle={article.albumTitle}
          releaseYear={article.releaseYear}
          price={article.price}
          key={article.id}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  articles: PropTypes.array,
};
