import React from 'react';
import { Link } from 'react-router-dom';
import { CartTable } from '../components';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  return (
    <CartContext.Consumer>
      {({ items /*  subtotal */ }) => (
        <>
          <h1
            style={{ color: '#1D3557', textAlign: 'left', marginLeft: '2vw' }}
          >
            My Cart
          </h1>
          {items.length === 0 ? (
            <div>
              <p style={{ textAlign: 'center', color: '#1D3557' }}>
                The cart is currently empty.
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <Link
                    to='/'
                    style={{
                      color: '#1D3557',
                    }}
                  >
                    Find something you like
                  </Link>{' '}
                  and add it to your cart.
                </div>
              </p>
            </div>
          ) : (
            <CartTable articles={items} /* subtotal={subtotal}  */ />
          )}
        </>
      )}
    </CartContext.Consumer>
  );
};
