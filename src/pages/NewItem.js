import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail, ItemCount } from '../components/next';
import { useFirebase } from '../firebase/useFirebase';
import { CartContext } from '../context/CartContext';

export const NewItemPage = () => {
  const { id } = useParams();

  const { fetching, getOneItem, item } = useFirebase();

  const [count, setCount] = useState(1);

  const onCountChange = e => {
    e.target.value === '' ? setCount(0) : setCount(Number(e.target.value));
  };

  useEffect(() => {
    getOneItem(id);
    console.log('🎣');
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Consumer>
      {({ addItems }) => (
        <main className='flex flex-col items-center justify-center my-4 h-auto'>
          <h1 className='text-font text-xl font-bold pb-4'>Item Detail</h1>
          {fetching ? (
            <p className='text-font font-semibold'>Loading article...</p>
          ) : item === null ? (
            <p className='text-font font-semibold'>The item does not exist</p>
          ) : (
            <>
              <ItemDetail item={item} />
              <ItemCount
                initial={1}
                min={1}
                max={10}
                count={count}
                setCount={setCount}
                onCountChange={onCountChange}
              />
              <button
                className='text-font hover:border-transparent hover:text-primary p-2'
                onClick={() => addItems(item, count)}
              >
                Add {count} to cart
              </button>
            </>
          )}
        </main>
      )}
    </CartContext.Consumer>
  );
};
