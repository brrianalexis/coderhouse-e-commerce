import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail, ItemCount } from '../components/next';
import { useFirebase } from '../firebase/useFirebase';
import { CartContext } from '../context/CartContext';

export const NewItemPage = () => {
  const { albumTitle } = useParams();

  const { fetching, getOneItem, item } = useFirebase();

  const [count, setCount] = useState(1);

  const onCountChange = e => {
    e.target.value === '' ? setCount(0) : setCount(Number(e.target.value));
  };

  useEffect(() => {
    getOneItem(albumTitle);
    console.log('🎣');
  }, [albumTitle, getOneItem]);

  return (
    <CartContext.Consumer>
      {({ addItems }) => (
        <main className='flex items-center justify-center bg-lightBackground'>
          <h1>Item Detail</h1>
          {fetching ? (
            <p>Loading article...</p>
          ) : (
            <div>
              <ItemDetail article={item} />
              <ItemCount
                initial={1}
                min={1}
                max={10}
                article={`${item.albumTitle} by ${item.artist}`}
                count={count}
                setCount={setCount}
                onCountChange={onCountChange}
              />
              <button onClick={() => addItems(item, count)}>
                Add {count} to cart
              </button>
            </div>
          )}
        </main>
      )}
    </CartContext.Consumer>
  );
};
