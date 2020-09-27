import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckoutForm } from '../';
import { CartContext } from '../../context/CartContext';

export const CartTable = ({ items }) => {
  const [inCheckout, setInCheckout] = useState(false);

  const handleCheckout = () => {
    setInCheckout(!inCheckout);
  };
  const { removeItem } = useContext(CartContext);

  const subtotal = items.reduce((a, b) => a + b.price * b.amount, 0);

  return (
    <div className='flex justify-center mb-8'>
      <table className='m-8'>
        <tr
          className='flex justify-around text-font border-b-2 border-primary'
          style={{
            width: '80vw',
          }}
        >
          <th className='text-left' style={{ width: '50vw' }}>
            Product
          </th>
          <th style={{ width: '10vw' }}>Price</th>
          <th style={{ width: '10vw' }}>Quantity</th>
          <th style={{ width: '10vw' }}>Remove</th>
          <th style={{ width: '10vw' }}>Price</th>
        </tr>
        {items.map(item => (
          <tr
            className='flex justify-around border-b-2 border-primary'
            key={item.id}
            style={{
              width: '80vw',
            }}
          >
            <td
              className='flex items-center text-left font-semibold'
              style={{
                width: '50vw',
              }}
            >
              <img
                className='mr-2'
                src={item.albumArt}
                alt={`${item.albumTitle} album cover`}
                style={{ width: '10vw' }}
              />
              {item.albumTitle} by {item.artist}
            </td>
            <td
              className='flex justify-center items-center'
              style={{
                width: '10vw',
              }}
            >
              ${item.price}
            </td>
            <td
              className='flex justify-center items-center'
              style={{
                width: '10vw',
              }}
            >
              {item.amount}
            </td>
            <td
              className='flex justify-center items-center'
              style={{
                width: '10vw',
              }}
            >
              <button
                aria-label='remove item from cart'
                //TODO    make this work
                onClick={() => removeItem(item)}
              >
                <span role='img' aria-label='red cross mark emoji'>
                  ❌
                </span>
              </button>
            </td>
            <td
              className='flex justify-center items-center'
              style={{
                width: '10vw',
              }}
            >
              ${item.price * item.amount}
            </td>
          </tr>
        ))}
        <tfoot className='text-right'>
          <p className='font-bold pt-2'>Subtotal ${subtotal}</p>
          <button
            className='h-8 m-auto mt-2 p-2 text-font transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-primary'
            disabled={inCheckout}
            onClick={() => handleCheckout()}
          >
            Check Out
          </button>
          {inCheckout ? (
            <CheckoutForm items={items} subtotal={subtotal} />
          ) : null}
        </tfoot>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  items: PropTypes.array,
};
