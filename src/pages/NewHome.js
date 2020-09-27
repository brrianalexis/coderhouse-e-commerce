import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../components/next';
import { useFirebase } from '../firebase/useFirebase';

export const NewHome = () => {
  const { getAllItems, getItemsByGenre, items, fetching } = useFirebase();
  const { genre } = useParams();

  useEffect(() => {
    genre === undefined ? getAllItems() : getItemsByGenre(genre);
    console.log('🎣');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  return (
    <main className='flex flex-col items-center justify-center my-4 h-auto'>
      <h1 className='text-font text-xl font-bold pb-4'>Products</h1>
      {fetching ? (
        <p style={{ color: '#1D3557', textAlign: 'center' }}>
          Loading products on sale...
        </p>
      ) : items.length === 0 ? (
        <p className='text-font font-semibold'>
          Category {genre} does not exist
        </p>
      ) : (
        <ItemList items={items} />
      )}
    </main>
  );
};
