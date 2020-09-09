import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <table
        style={{
          border: '2px solid purple',
        }}
      >
        <tr
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw',
            border: '2px solid pink',
          }}
        >
          <th style={{ width: '50vw', textAlign: 'left' }}>Product</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Price</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Quantity</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Remove</th>
          <th style={{ width: '10vw', border: '1px solid pink' }}>Price</th>
        </tr>
        {articles.map(article => (
          <tr
            key={article.id}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '80vw',
              border: '2px solid pink',
            }}
          >
            <td
              style={{
                width: '50vw',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={article.albumArt}
                style={{ width: '10vw', marginRight: '0.5rem' }}
              />
              {article.albumTitle}
            </td>
            <td
              style={{
                width: '10vw',
                border: '1px solid pink',
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
                border: '1px solid pink',
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
                border: '1px solid pink',
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
                border: '1px solid pink',
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
          <p>
            Subtotal: ${articles.reduce((a, b) => a + b.price * b.amount, 0)}
          </p>
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
          >
            Check Out
          </button>
        </tfoot>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  articles: PropTypes.array,
};
