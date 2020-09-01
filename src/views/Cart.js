import React from 'react';
import { CartTable } from '../components';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  return (
    <CartContext.Consumer>
      {({ items }) => (
        <>
          <h1
            style={{ color: '#1D3557', textAlign: 'left', marginLeft: '2vw' }}
          >
            My Cart
          </h1>
          {items.length === 0 ? (
            <div>
              <p style={{ textAlign: 'center' }}>The cart is empty</p>
            </div>
          ) : (
            <CartTable articles={items} />
          )}
        </>
      )}
    </CartContext.Consumer>
  );
};
