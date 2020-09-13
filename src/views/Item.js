import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail, ItemCount } from '../components';
import { useFirebase } from '../firebase/useFirebase';
import { CartContext } from '../context/CartContext';

export const ItemView = () => {
  const cleanButtonStyle = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };

  const { albumTitle } = useParams();

  const [count, setCount] = useState(1);
  const { fetching, item, getOneItem } = useFirebase();

  const onCountChange = e => {
    e.target.value === '' ? setCount(0) : setCount(parseInt(e.target.value));
  };

  useEffect(() => {
    getOneItem(albumTitle);
    console.log('⚡');
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContext.Consumer>
      {({ addItems }) => (
        <>
          <h1 style={{ color: '#1D3557', textAlign: 'center' }}>Item Detail</h1>
          {fetching ? (
            <p style={{ color: '#1D3557', textAlign: 'center' }}>
              Loading article...
            </p>
          ) : (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                color: '#1D3557',
                marginBottom: '2rem',
              }}
              data-testid='item-detail-container'
            >
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
              <button
                style={{
                  ...cleanButtonStyle,
                  height: '1.5rem',
                  margin: 'auto',
                  marginTop: '0.5vh',
                  backgroundColor: '#F1FAEE',
                  border: '1px solid #A8DADC',
                  borderRadius: '0.5em',
                  width: '27.5vw',
                }}
                className='add-to-cart-button'
                onClick={() => addItems(item, count)}
              >
                Buy {count}
              </button>
            </div>
          )}
        </>
      )}
    </CartContext.Consumer>
  );
};
