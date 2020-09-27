import React from 'react';
import { Link } from 'react-router-dom';
import { CartTable } from '../components/next';
import { CartContext } from '../context/CartContext';

export const NewCart = () => {
  return (
    <CartContext.Consumer>
      {({ items }) => (
        <>
          <main className='flex flex-col items-center justify-center mt-4 h-auto'>
            <h1 className='text-font text-xl font-bold pb-4'>My Cart</h1>
            {items.length === 0 ? (
              <div>
                <p className='text-center text-font'>
                  The cart is currently empty.
                  <div className='text-center mt-2'>
                    <Link to='/' className='text-primary hover:font-semibold'>
                      Find something you like&nbsp;
                    </Link>
                    and add it to your cart
                  </div>
                </p>
              </div>
            ) : (
              <CartTable items={items} />
            )}
          </main>
        </>
      )}
    </CartContext.Consumer>
  );
};
