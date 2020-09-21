import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList, Link } from '../components/Legacy';
import { useFirebase } from '../firebase/useFirebase';
import '../components/Legacy/styles.css';

export const Home = () => {
  const { getAllItems, getItemsByGenre, items, fetching } = useFirebase();
  const { genre } = useParams();

  useEffect(() => {
    genre === undefined ? getAllItems() : getItemsByGenre(genre);
    console.log('⚡');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching, genre]);

  return (
    <>
      <h1 style={{ color: '#1D3557', textAlign: 'center' }}>Products</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0.5rem',
          padding: '0.5rem',
        }}
      >
        <Link
          style={{
            margin: '0.5rem',
            padding: '0.2rem',
            border: '1px solid #A8DADC',
            borderRadius: '0.5rem',
          }}
          className='genre-link'
          to='/genre/hip-hop'
        >
          hip-hop
        </Link>
        <Link
          style={{
            margin: '0.5rem',
            padding: '0.2rem',
            border: '1px solid #A8DADC',
            borderRadius: '0.5rem',
          }}
          className='genre-link'
          to='/genre/trap'
        >
          trap
        </Link>
        <Link
          style={{
            margin: '0.5rem',
            padding: '0.2rem',
            border: '1px solid #A8DADC',
            borderRadius: '0.5rem',
          }}
          className='genre-link'
          to='/genre/indie pop'
        >
          indie pop
        </Link>
        <Link
          style={{
            margin: '0.5rem',
            padding: '0.2rem',
            border: '1px solid #A8DADC',
            borderRadius: '0.5rem',
          }}
          className='genre-link'
          to='/genre/prog-rock'
        >
          prog-rock
        </Link>
        <Link
          style={{
            margin: '0.5rem',
            padding: '0.2rem',
            border: '1px solid #A8DADC',
            borderRadius: '0.5rem',
          }}
          className='genre-link'
          to='/genre/post-hardcore'
        >
          post-hardcore
        </Link>
      </div>
      {fetching ? (
        <p style={{ color: '#1D3557', textAlign: 'center' }}>
          Loading products on sale...
        </p>
      ) : (
        <ItemList articles={items} />
      )}
    </>
  );
};
