import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckoutForm } from './';

export const CartTable = ({ articles }) => {
  const cleanButtonStyle = {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  };

  const [inCheckout, setInCheckout] = useState(false);

  const handleCheckout = () => {
    setInCheckout(!inCheckout);
  };

  const subtotal = articles.reduce((a, b) => a + b.price * b.amount, 0);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}
    >
      <table
        style={{
          margin: '2rem',
        }}
      >
        <tr
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw',
            border: '2px solid #E63946',
          }}
        >
          <th
            style={{
              width: '50vw',
              textAlign: 'left',
              border: '1px solid #E63946',
            }}
          >
            Product
          </th>
          <th style={{ width: '10vw', border: '1px solid #E63946' }}>Price</th>
          <th style={{ width: '10vw', border: '1px solid #E63946' }}>
            Quantity
          </th>
          <th style={{ width: '10vw', border: '1px solid #E63946' }}>Remove</th>
          <th style={{ width: '10vw', border: '1px solid #E63946' }}>Price</th>
        </tr>
        {articles.map(article => (
          <tr
            key={article.id}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '80vw',
              border: '2px solid #E63946',
            }}
          >
            <td
              style={{
                width: '50vw',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #E63946',
              }}
            >
              <img
                src={article.albumArt}
                style={{ width: '10vw', marginRight: '0.5rem' }}
                alt={`${article.albumTitle} album cover`}
              />
              {article.albumTitle}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid #E63946',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              ${article.price}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid #E63946',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {article.amount}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid #E63946',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                style={{ ...cleanButtonStyle }}
                aria-label='remove item from cart'
                //TODO  handle onClick to remove item
              >
                <span role='img' aria-label='red cross mark emoji'>
                  ❌
                </span>
              </button>
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid #E63946',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              ${article.price * article.amount}
            </td>
          </tr>
        ))}
        <tfoot style={{ textAlign: 'right' }}>
          <p>Subtotal: ${subtotal}</p>
          <button
            style={{
              ...cleanButtonStyle,
              height: '2rem',
              margin: 'auto',
              padding: '0 0.5rem',
              marginTop: '0.5vh',
              backgroundColor: '#F1FAEE',
              border: '1px solid #A8DADC',
              borderRadius: '0.5em',
            }}
            className='add-to-cart-button'
            disabled={inCheckout}
            onClick={() => handleCheckout()}
          >
            Check Out
          </button>
          {inCheckout ? (
            <CheckoutForm articles={articles} totalPrice={subtotal} />
          ) : null}
        </tfoot>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  articles: PropTypes.array,
};
